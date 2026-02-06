import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import type { OpenClawPluginApi } from "openclaw/plugin-sdk";

export default function register(api: OpenClawPluginApi) {
  api.registerTool(
    {
      name: "dimos_hello",
      description: "Says hello world via MCP.",
      parameters: {
        type: "object",
        properties: {},
      },
      async execute() {
        const serverPath = resolve(
          new URL(".", import.meta.url).pathname,
          "mcp-server.ts",
        );

        const transport = new StdioClientTransport({
          command: "npx",
          args: ["tsx", serverPath],
        });

        const client = new Client({
          name: "openclaw-dimos",
          version: "1.0.0",
        });

        try {
          await client.connect(transport);
          const result = await client.callTool({ name: "dimos_hello" });
          return result as {
            content: Array<{ type: string; text: string }>;
          };
        } finally {
          await client.close();
        }
      },
    },
  );
}

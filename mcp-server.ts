import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "dimos",
  version: "1.0.0",
});

server.registerTool("dimos_hello", {
  description: "Says hello world from the Dimos MCP server.",
}, async () => {
  return {
    content: [{ type: "text", text: "Hello, world! Dimos MCP server is running." }],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);

import type { OpenClawPluginApi } from "openclaw/plugin-sdk";

export default function register(api: OpenClawPluginApi) {
  api.registerTool({
    name: "dimos_hello",
    description: "Says hello world from the Dimos plugin.",
    parameters: {
      type: "object",
      properties: {},
    },
    async execute() {
      return {
        content: [{ type: "text", text: "Hello, world! Dimos plugin is running." }],
      };
    },
  });
}

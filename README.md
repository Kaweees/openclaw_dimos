# OpenClaw Dimensional

In one terminal, run the following commands:

```bash
uv sync
```

```bash
uv run dimos run unitree-go2-agentic-mcp
```

In another terminal, run the following commands:

```bash
pnpm install
uv sync
```

```bash
pnpm openclaw config set plugins.entries.dimos.enabled true
```

```bash
pnpm openclaw gateway stop && pnpm openclaw gateway run --port 18789 --verbose gateway.mode=local
```

```bash
uv run python -m dimos.protocol.mcp
```

```bash
pnpm openclaw agent --session-id dimos-test --message "move forward 10 meters"
```


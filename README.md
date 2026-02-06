# OpenClaw Dimensional

```bash
pnpm install
uv sync
```

```bash
pnpm openclaw config set plugins.entries.dimos.enabled true
```

```bash
pnpm openclaw gateway stop && pnpm openclaw gateway run
```

pkill -9 -f openclaw-gateway || true
nohup pnpm openclaw gateway run --bind loopback --port 18789 --force > /tmp/openclaw-gateway.log 2>&1 &


```bash
pnpm openclaw gateway run --port 18789 gateway.mode=local
```

openclaw gateway --port 18789 --verbose


```bash
uv run python -m dimos.protocol.mcp
```
<!--
```bash
pnpm openclaw message send "move forward 10 meters"
``` -->

```bash
pnpm openclaw agent --session-id dimos-test --message "move forward 10 meters"
```

Or start an interactive session:

```bash
pnpm openclaw agent --session-id dimos-test
```

```bash
uv run dimos run unitree-go2-agentic-mcp
```



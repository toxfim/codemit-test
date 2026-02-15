import { Hono } from "hono";
import { hello } from "@codemit/shared";

const app = new Hono();

app.get("/health", (c) => c.json({ ok: true }));
app.get("/", (c) => c.text(hello("api")));

export default app;

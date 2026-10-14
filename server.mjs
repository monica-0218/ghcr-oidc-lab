import { readFileSync } from "node:fs";
import { createServer } from "node:http";

const MARKER = readFileSync(new URL("./marker.txt", import.meta.url), "utf8").trim();
const PORT = Number(process.env.PORT ?? 3000);

createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  if (req.url === "/healthz") {
    res.end("ok\n");
    return;
  }
  res.end(`lab ${MARKER}\nhost=${process.env.FLY_MACHINE_ID ?? "local"}\n`);
}).listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

import { createServer } from "node:http";

const VERSION = process.env.BUILD_MARKER ?? "v1";
const PORT = Number(process.env.PORT ?? 8080);

createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end(`poc ${VERSION}\nhost=${process.env.FLY_MACHINE_ID ?? "local"}\n`);
}).listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

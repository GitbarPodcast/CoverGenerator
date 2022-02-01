import fastify from "fastify";
import fastifyStatic from "fastify-static";
import * as pfs from "fs/promises";
import * as path from "path";
import { Conf } from "./consts";

export default async (
  response: Conf,
  printer: (address: string) => Promise<void>
) => {
  const injectHtml = `
  <script>
    window.__COVER__ = ${JSON.stringify(response)}
  </script>
`;

  const server = fastify({ logger: { level: "trace" } });

  server.register(fastifyStatic, {
    root: path.join(__dirname, "../../../assets"),
    index: false,
  });

  server.get("/", async (_, reply) => {
    const html = (
      await pfs.readFile(
        path.join(__dirname, "../../../assets/index.html"),
        "utf8"
      )
    ).replace("<title>Vite App</title>", injectHtml);
    reply.type("text/html").send(html);
  });

  server.listen(8080, async (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
    await printer(address);

    console.log("print finish");
    server.close();
  });
};

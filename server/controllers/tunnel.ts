import type { Strapi } from "@strapi/strapi";
import localtunnel from "localtunnel";
import pluginId from "../../admin/src/pluginId";

let tunnel: localtunnel.Tunnel | null = null;
export default ({ strapi }: { strapi: Strapi }) => ({
  async createTunnel(ctx) {
    // @ts-ignore
    const endpoint = strapi.config.get("plugin."+pluginId)?.endpoint;
    const PORT = strapi.config.get("server.port");
    const ENDPOINT = strapi.config.get("plugin.graphql.endpoint");

    if ((!PORT || !ENDPOINT) && !endpoint) {
      return ctx.throw(400, "Server port or GraphQL endpoint not found");
    }

    let url: string;

    if (endpoint) {
      url = endpoint;
    } else {
      const NODE_MAJOR_VERSION = process.versions.node.split(".")[0];
      tunnel = await localtunnel({
        host: "http://lt.boltapi.com",
        port: PORT,
        local_host: Number(NODE_MAJOR_VERSION) <= 16 ? "0.0.0.0" : "127.0.0.1",
        allow_invalid_cert: true,
      });
      url = `${tunnel.url}${ENDPOINT}`;
    }

    ctx.body = {
      url,
    };
  },
  async closeTunnel(ctx) {
    tunnel?.close();

    ctx.body = {
      success: true,
    };
  },
});

import type { Strapi } from "@strapi/strapi";
import localtunnel from "localtunnel";
import pluginId from "../../admin/src/pluginId";

let tunnel: localtunnel.Tunnel | null = null;
export default ({ strapi }: { strapi: Strapi }) => ({
  async createTunnel(ctx) {
    const endpoint = strapi.config.get(pluginId)?.endpoint;
    const PORT = strapi.config.get("server.port");
    const ENDPOINT = strapi.config.get("plugin.graphql.endpoint");

    if ((!PORT || !ENDPOINT) && !endpoint) {
      return ctx.throw(400, "Server port or GraphQL endpoint not found");
    }

    tunnel = await localtunnel({
      host: "http://lt.boltapi.com",
      port: PORT,
      allow_invalid_cert: true,
    });

    ctx.body = {
      url: `${tunnel.url}${ENDPOINT}`,
    };
  },
  async closeTunnel(ctx) {
    tunnel?.close();

    ctx.body = {
      success: true,
    };
  },
});

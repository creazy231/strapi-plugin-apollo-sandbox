"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const localtunnel_1 = __importDefault(require("localtunnel"));
const pluginId_1 = __importDefault(require("../../admin/src/pluginId"));
let tunnel = null;
exports.default = ({ strapi }) => ({
    async createTunnel(ctx) {
        var _a;
        const endpoint = (_a = strapi.config.get(pluginId_1.default)) === null || _a === void 0 ? void 0 : _a.endpoint;
        const PORT = strapi.config.get("server.port");
        const ENDPOINT = strapi.config.get("plugin.graphql.endpoint");
        if ((!PORT || !ENDPOINT) && !endpoint) {
            return ctx.throw(400, "Server port or GraphQL endpoint not found");
        }
        tunnel = await (0, localtunnel_1.default)({
            host: "http://lt.boltapi.com",
            port: PORT,
            allow_invalid_cert: true,
        });
        ctx.body = {
            url: `${tunnel.url}${ENDPOINT}`,
        };
    },
    async closeTunnel(ctx) {
        tunnel === null || tunnel === void 0 ? void 0 : tunnel.close();
        ctx.body = {
            success: true,
        };
    },
});

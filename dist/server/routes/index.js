"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: "GET",
        path: "/create-tunnel",
        handler: "tunnel.createTunnel",
        config: {
            roles: ["admin"],
            policies: [],
        },
    },
    {
        method: "GET",
        path: "/close-tunnel",
        handler: "tunnel.closeTunnel",
        config: {
            roles: ["admin"],
            policies: [],
        },
    },
];

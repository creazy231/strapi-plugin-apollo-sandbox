"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    default: ({ env }) => ({
        endpoint: null,
    }),
    validator: (config) => {
        if (config.endpoint) {
            if (config.endpoint !== typeof "string") {
                throw new TypeError("endpoint has to be a string");
            }
            if (!config.endpoint.startsWith("http://") || !config.endpoint.startsWith("https://")) {
                throw new TypeError("endpoint has to be a valid URL");
            }
        }
    },
};

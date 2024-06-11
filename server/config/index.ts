export default {
  default: ({ env }) => ({
    endpoint: null,
  }),
  validator: (config) => {
    if (config.endpoint) {
      if (typeof config.endpoint !== "string") {
        throw new TypeError("endpoint has to be a string");
      }

      if (!config.endpoint.startsWith("http://") && !config.endpoint.startsWith("https://")) {
        throw new TypeError("endpoint has to be a valid URL");
      }
    }
  },
};

import { createRequestHandler } from "@remix-run/cloudflare-workers";

export default {
  async fetch(request, env, ctx) {
    try {
      return await createRequestHandler({
        build: await import("./build/index.js"),
        mode: env.NODE_ENV
      })(request, env, ctx);
    } catch (err) {
      return new Response("Internal Error", { status: 500 });
    }
  }
};
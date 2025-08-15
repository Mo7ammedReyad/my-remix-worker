import { createRequestHandler } from "@remix-run/cloudflare";
import * as build from "./build/server";

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    try {
      return await createRequestHandler({
        build,
        mode: env.NODE_ENV
      })(request, env, ctx);
    } catch (err) {
      // Better error message for debugging
      const message = err instanceof Error ? err.message : String(err);
      return new Response("Internal Error: " + message, { status: 500 });
    }
  }
};

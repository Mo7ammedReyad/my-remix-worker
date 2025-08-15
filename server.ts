import * as build from "./build/server";
import { createWorkerHandler } from "@remix-run/cloudflare-workers";

export default {
  fetch: createWorkerHandler({ build }),
};

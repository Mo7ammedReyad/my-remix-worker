// Build output mock for Cloudflare Worker
export default {
  default: () => new Response("Hello from build/server.js")
};
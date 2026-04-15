import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Official OpenNext defaults for Cloudflare (nodejs_compat + cloudflare-node
 * wrapper, edge converter, dummy caches). Required by the adapter validator.
 * Override incrementalCache / tagCache / queue here when you add R2/KV.
 */
export default defineCloudflareConfig();

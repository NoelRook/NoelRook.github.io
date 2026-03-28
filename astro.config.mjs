import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repoFromEnv = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubRepo = repoFromEnv && repoFromEnv.length > 0 ? repoFromEnv : "noelrook.github.io";
const isUserSite = githubRepo.toLowerCase() === "noelrook.github.io";

export default defineConfig({
  site: "https://noelrook.github.io",
  base: isUserSite ? "/" : `/${githubRepo}/`,
  output: "static",
  integrations: [sitemap()]
});

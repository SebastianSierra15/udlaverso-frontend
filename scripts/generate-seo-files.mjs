import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.resolve(projectRoot, "../dist");
const readEnvSiteUrl = async () => {
  for (const fileName of [".env.production", ".env.local", ".env"]) {
    try {
      const content = await readFile(path.resolve(projectRoot, "..", fileName), "utf8");
      const match = content.match(/^VITE_SITE_URL=(.*)$/m);
      if (match?.[1]) return match[1].trim().replace(/^['"]|['"]$/g, "");
    } catch {
      // Optional environment files do not need to exist.
    }
  }

  return "";
};

const configuredSiteUrl = (
  process.env.VITE_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  (await readEnvSiteUrl()) ||
  "http://localhost:5173"
)
  .trim()
  .replace(/\/$/, "");

const publicPaths = [
  "/",
  "/acerca-de",
  "/como-empezar",
  "/proyectos",
  "/noticias",
  "/contacto",
  "/preguntas-frecuentes",
  "/terminos-y-condiciones",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicPaths.map((page) => `  <url><loc>${configuredSiteUrl}${page}</loc></url>`).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /login
Disallow: /registrarse
Disallow: /recuperar
Disallow: /error

Sitemap: ${configuredSiteUrl}/sitemap.xml
`;

await mkdir(distDirectory, { recursive: true });
await Promise.all([
  writeFile(path.join(distDirectory, "robots.txt"), robots, "utf8"),
  writeFile(path.join(distDirectory, "sitemap.xml"), sitemap, "utf8"),
]);

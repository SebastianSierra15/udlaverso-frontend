import { Helmet } from "react-helmet-async";
import { absoluteUrl, getCanonicalUrl } from "./seo.utils";

const DEFAULT_TITLE = "UdlaVerso | Innovación educativa e inmersiva";
const DEFAULT_DESCRIPTION =
  "Explora los proyectos de realidad aumentada, laboratorios y experiencias interactivas del UdlaVerso de la Universidad de la Amazonia.";
const DEFAULT_IMAGE = "/images/hero.webp";

export type SeoSchema = Record<string, unknown> | Record<string, unknown>[];

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  schema?: SeoSchema;
  author?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  schema,
  author = "Universidad de la Amazonia",
  keywords,
}) => {
  const canonical = getCanonicalUrl(path);
  const imageUrl = absoluteUrl(image);
  const robots = noindex ? "noindex,nofollow" : "index,follow";

  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      <meta name="publisher" content="Universidad de la Amazonia" />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="UdlaVerso" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

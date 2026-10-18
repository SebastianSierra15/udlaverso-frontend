const getSiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

  if (configuredUrl) return configuredUrl.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;

  return "";
};

export const absoluteUrl = (value: string) => {
  if (/^https?:\/\//i.test(value)) return value;

  const normalizedPath = value.startsWith("/") ? value : `/${value}`;
  return `${getSiteUrl()}${normalizedPath}`;
};

export const getCanonicalUrl = (path = "/") => {
  const cleanPath = path.split("?")[0].split("#")[0] || "/";
  return absoluteUrl(cleanPath);
};

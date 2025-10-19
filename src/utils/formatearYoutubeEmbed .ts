export const formatearYoutubeEmbed = (url?: string): string => {
  if (!url) return "";
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

import imageCompression from "browser-image-compression";

export const convertirAWebp = async (file: File): Promise<File> => {
  const options = {
    fileType: "image/webp",
    maxWidthOrHeight: 1920,
    initialQuality: 0.8,
  };

  try {
    const compressed = await imageCompression(file, options);
    return new File([compressed], file.name.replace(/\.[^.]+$/, ".webp"), {
      type: "image/webp",
    });
  } catch {
    return file; // fallback si falla
  }
};

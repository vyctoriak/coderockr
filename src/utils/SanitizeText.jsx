export const SanitizeText = (text) => {
  return text
    .trim()
    .replace(/\n/g, '')
    .replace(/\<p\>/g, '')
    .replace(/\<\/p\>/g, '')
    .replace(/\<img.*.\/\>/g, '');
};

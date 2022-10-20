function SanitizeText(text) {
  return text
    .replace(/\n/g, '')
    .replace(/\<p\>/g, '')
    .replace(/\<\/p\>/g, '')
    .replace(/\<img.*.\/\>/g, '');
}

export default SanitizeText;

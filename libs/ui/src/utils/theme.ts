export const fontStack = (fonts: string[]) => {
  return fonts
    .map((font) => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
};

export const fontStack = (fonts: string[]) => {
  return fonts
    .map((font) => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
};

export const flatWithPath = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: Record<string, any>,
  prefix: string
): Record<string, string> => {
  return Object.entries(colors).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      const nextPrefix = `${prefix}-${key}`;

      if (Array.isArray(value)) {
        value.forEach((color, index) => {
          acc[`${nextPrefix}-${index}`] = color;
        });
        return acc;
      }

      if (typeof value === 'object') {
        Object.entries(flatWithPath(value, nextPrefix)).forEach(
          ([key, value]) => {
            acc[key] = value;
          }
        );
        return acc;
      }

      acc[nextPrefix] = value;
      return acc;
    },
    {}
  );
};

export const toCssCustomProperties = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: Record<string, any>,
  path: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Record<string, any> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res: Record<string, any> = {};

  Object.entries(colors).forEach(([key, value]) => {
    const nextPath = `${path}-${key}`;

    if (Array.isArray(value)) {
      res[key] = value.map((_, index) => withVar(`${nextPath}-${index}`));
      return;
    }

    if (typeof value === 'object') {
      res[key] = toCssCustomProperties(value, nextPath);
      return;
    }

    res[key] = withVar(nextPath);
  });

  return res;
};

const withVar = (x: string) => `var(${x})`;

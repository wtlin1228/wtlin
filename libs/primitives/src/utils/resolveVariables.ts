import isFunction from 'lodash/isFunction';

const resolveVariables = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vars: Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: Record<string, any>
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(vars).reduce<Record<string, any>>(
    (acc, [key, value]) => {
      if (typeof value === 'string') {
        acc[key] = value;
      } else if (isFunction(value)) {
        acc[key] = value(obj);
      } else if (typeof value === 'object') {
        acc[key] = resolveVariables(value, obj);
      }

      return acc;
    },
    {}
  );
};

export default resolveVariables;

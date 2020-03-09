import { get, set } from 'lodash';

export function autopopulateExtend(schema, options) {
  schema.eachPath(function(path, type) {
    const autoopulateOptions = get(type, "options.autopopulate");
    if (typeof autoopulateOptions === "object") {
      const keys = Object.keys(options);
      keys.forEach(key => {
        const defaultValue =
          typeof autoopulateOptions[key] === "object" ? {} : "";
        const globalOption = get(options, `${key}`, defaultValue);
        const localOption = get(type, `options.${key}`, defaultValue);
        if (typeof autoopulateOptions[key] === "object") {
          const mergedOptions = {
            ...globalOption,
            ...localOption
          };
          set(type, `options.autopopulate.${key}`, mergedOptions);
        } else {
          set(type, `options.autopopulate.${key}`, autoopulateOptions[key]);
        }
      });
    }
  });
}

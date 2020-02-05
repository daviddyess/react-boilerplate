/**
 * Creates an object containing action constants namespaced under the specified reducer.
 *
 * @param {string} reducer The name of the reducer or module
 * @param {string[]} actions A list of action names
 * @return {object} Object with action name keys and full action string values
 * @author ayan4m1 <https://github.com/ayan4m1>
 */
export function buildActions(reducer, actions) {
  const result = {};

  for (const action of actions) {
    result[action] = `${reducer}/${action}`;
  }

  return result;
}

/**
 * Interpolate strings from the `params` object into the `url`.
 *
 * @param {object} endpoint Object with `url` and optional `params` object
 * @author ayan4m1 <https://github.com/ayan4m1>
 */
export const buildUrl = endpoint => {
  // this is defined by webpack.DefinePlugin
  const baseUrl = process.env.REACT_APP_API_URL || 'localhost';
  const { url, params } = endpoint;

  if (!params) {
    return `${baseUrl}${url}`;
  }

  return Object.entries(params).reduce((resultUrl, entry) => {
    const [key, value] = entry;

    return resultUrl.replace(`{${key}}`, value);
  }, `${baseUrl}${url}`);
};
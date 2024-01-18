export function mapAPIParamsToApp(paramName, apiKey) {
  let result = null;
  const swappedData = swapKeysAndValues(paramName);
  for (const key in swappedData) {
    if (Object.hasOwnProperty.call(swappedData, key)) {
      if (apiKey === swappedData[key]) {
        result = swappedData[key];
        break;
      }
    }
  }
  return result;
}

export function swapKeysAndValues(obj) {
  const swapped = Object.entries(obj).map(([key, value]) => [value, key]);
  return Object.fromEntries(swapped);
}

export function isEmptyObject(obj){
    return (Object.keys(obj).length > 0) ? false : true
}

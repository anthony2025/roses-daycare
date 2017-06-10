export default (object, callback) =>
  Object.keys(object).map(key => callback(key, object[key]))

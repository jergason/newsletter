function translateToActiveModelSerializer(model) {
  var json = model.toJSON()
  var translatedObj = {}
  Object.keys(json).forEach(function(key) {
    // Ghetto, will not work for nested objects
    translatedObj[camelCaseToUnderscore(key)] = json[key]
  })
  return translatedObj
}

function createJsonRoot(rootName, payload) {
  var obj = {}
  var translatedPayload
  if (Array.isArray(payload)) {
    translatedPayload = payload.map(function(model) {
      return translateToActiveModelSerializer(model)
    })
  }
  else {
    translatedPayload = translateToActiveModelSerializer(payload)
  }

  obj[rootName] = translatedPayload

  return obj
}

var UPPER_CASE_REGEX = new RegExp('[A-Z]', 'g')
function camelCaseToUnderscore(str) {
  // Special case to convert mongodb _id
  if (str === '_id') {
    return 'id'
  }

  return str.replace(UPPER_CASE_REGEX, function(match) {
    return '_' + match.toLowerCase()
  })
}

module.exports = createJsonRoot

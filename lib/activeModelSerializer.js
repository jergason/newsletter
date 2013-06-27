function translateToActiveModelSerializer(model) {
  var json = model.toJSON()
  var translatedObj = {}
  Object.keys(json).forEach(function(key) {
    // Ghetto, will not work for nested objects
    translatedObj[camelCaseToUnderscore(key)] = json[key]
  })
  return translatedObj
}

function serialize(rootName, payload) {
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

function unserialize(payload) {
  // it comes in an object
  var root = payload[Object.keys(payload)[0]]
  var translatedRoot

  if (Array.isArray(root)) {
    translatedRoot = root.map(function(model) {
      return translateToMongodb(model)
    })
  }
  else {
    translatedRoot = translateToMongodb(root)
  }
  return translatedRoot
}

function translateToMongodb(model) {
  var translated = {}
  Object.keys(model).forEach(function(key) {
    translated[underscoreToCamelCase(key)] = model[key]
  })
  return translated
}

function underscoreToCamelCase(str) {
  // handle special mongodb id
  if (str === 'id') return '_id'
  var UNDERSCORE_LETTER_REGEX = new RegExp('_([A-Za-z])', 'g')
  var tmp = str.replace(UNDERSCORE_LETTER_REGEX, function(match, letter) {
    return letter.toUpperCase()
  })
  // catch any remaining non-alphanumeric chars separated by underscores
  return tmp.replace('_', '')
}

function camelCaseToUnderscore(str) {
  var UPPER_CASE_REGEX = new RegExp('[A-Z]', 'g')
  // Special case to convert mongodb _id
  if (str === '_id') {
    return 'id'
  }

  return str.replace(UPPER_CASE_REGEX, function(match) {
    return '_' + match.toLowerCase()
  })
}

module.exports = {
  serialize: serialize,
  unserialize: unserialize
}

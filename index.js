var recipes = {};

function updateObjectWithKeyAndValue( object, key, value) {
  return object
  return object.assign({}, obj, { [key]: 'value'})
}

function updateObjectWithKeyAndValue(object, key, value) {
  return object
  return object[key] = value;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

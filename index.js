var recipes = {};

function updateObjectWithKeyAndValue( object, key, value) {
  return object.assign({}, obj, { [key]: 'value'})
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

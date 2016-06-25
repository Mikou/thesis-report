function validateTypeParameters (name, typeParams) {
  
  var properties = typeParams.properties;
  
  // verify keys
  for(var prop in properties) {
    if(!typeParams.properties[prop].hasOwnProperty('initialValue'))
      throw new Error("missing key: 'initialValue'");
    if(!typeParams.properties[prop].hasOwnProperty('validator'))
      throw new Error("missing key: 'validator'");
  }

  // the name must be different from the name of the type to extend;
  if(typeParams.extends === name)
    throw new Error("The Type name ('" + name + "') cannot be the same as the Type to extend");

  // implicitely sets abstract to false if not defined;
  if(!typeParams.abstract)
    typeParams.abstract = false;

  // the provided initialValues should pass their given validator;
  for(var prop in properties) {
    typeParams.properties[prop].validator(typeParams.properties[prop].initialValue, prop);  
  }
}

function registerComponent (name, typeParams) {
  validateTypeParameters(name, typeParams);
  setType(name, typeParams);
}

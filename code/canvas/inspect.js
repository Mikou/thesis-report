function inspect (internal, type, property) {
  const T = types[type];

  if(typeof T === 'undefined' || !property)
    return T;

  if(!internal && T.abstract)
    throw new Error("Abstract type " + type);

  const properties = T.properties;
  if(properties && properties.hasOwnProperty(property)) {
    return properties[property];
  } else if(T.extends) {
    return inspect(true, T.extends, property);
  }

  return undefined;
}
function createComponent (type, internal) {

  const T = getType(type);

  if(!internal && T.abstract)
    throw new Error('The requested type is abstract and can therefore not be instanciated');

  const prototype = (T.extends) ? createComponent(T.extends, true) : Object.prototype;
  const component = Object.create(prototype, {
    children:   { writable:true, value: [] },
    properties: { writable:true, value: {} }
  }); 
 
  for(let prop in T.properties) {
    component.properties[prop] = createProperty(prop, T.properties[prop]);
  }
  for(let key in T) {
    if(key === 'properties' || key === 'extends') continue;
    component[key] = T[key];
  }

  return component;
}

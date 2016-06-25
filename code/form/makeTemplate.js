function createTemplate () {
  const templateProto = { 
    setProperty: setProperty,
    getProperty: getProperty,
    getResource: getResource,
    appendChild: appendChild,
  }
  const template = Object.create(templateProto, {
    name:          {writable: true, value: null},
    type:          {writable: false, value: 'template'},
    componentType: {writable: true, value: null},
    rows:          {writable: true, value: null},
    parent:        {writable: true, value: null},
    visited:       {writable: true, value: false},
    bundle:        {writable: true, value: []},
    properties:    {writable: true, value: {}},
    children:      {writable: true, value: []},
    query:         {writable: true, value: null}
  }); 
  return template;
}
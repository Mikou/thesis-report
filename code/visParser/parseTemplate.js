function parseTemplate () {
  const properties = []; 
  const tplDefinition = {}; 
  const template = form.createTemplate();

  while(!ts.eof() && ts.peek().type !== 'separator') {
    const property = parseProperty();
    tplDefinition[property.key] = property.formula;
    if(!ts.eof()) skipEOL();
  }
  if(!ts.eof() && ts.peek().type === 'separator') skipSeparator();

  for(var key in tplDefinition)
    if (typeof canvas.inspect(false, key) !== 'undefined')
      template.componentType = key;
  if(++tplCount === 1) {
    if(template.componentType === null) {
      template.componentType = 'Canvas';
      if(tplDefinition.hasOwnProperty('Name')) {
        template.name = tplDefinition.Name;
        delete tplDefinition['Name'];
      } else {
        template.name = 'visfilename.vis';
      }   
      buildTemplate(template, tplDefinition);
      return;
    } else {

      var rootTpl = form.createTemplate();
      rootTpl.componentType = 'Canvas';
      rootTpl.name = 'visfilename.vis'

      form.setTree(rootTpl);

      buildTemplate(template, tplDefinition);
      return;
    }   

  } else {
    if(template.componentType === null)
      throw new Error("The Template number " +tplCount+ " does not define a valid Component Type");
    buildTemplate(template, tplDefinition);
    return;
  }
  
  function buildTemplate(template, tplDefinition) {
    // when the component type is known, we can check the keys against the component type
    for(var key in tplDefinition) {
      if(canvas.inspect(template.componentType === 'Canvas', template.componentType, key)) {
        template.properties[key] = tplDefinition[key];
      } else {
        if(key === template.componentType) {
          template.name = tplDefinition[key].value.value;
        }
        else if(key === 'Rows') {
          //template.setRows(tplDefinition[key]);
          template.rows = tplDefinition[key];
        } else {
          throw new Error("'" + key + "' is not a valid property name for Component of type " + template.componentType);
        }
      }
    }
    (template.componentType === 'Canvas') ? form.setTree(template) : form.addTemplate(template);
  }
}

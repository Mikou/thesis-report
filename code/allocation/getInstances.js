function getDataInstances(visStream) {
  return new Promise( function (resolve, reject) {
    visParser.init({
      tokenizer: tokenizer(streamReader(visStream)), 
      canvas: canvas, 
      form: form
    });

    visParser.parse();

    // preevaluate rows in order to build the template Tree
    const templateList = form.getTemplateList();

    for(let name in templateList) {
      const template = templateList[name];
      if(template.rows) {
        const env = {form: form, map: map, template: template, property: 'Rows'};
        preEvaluate(template.rows, env);
      } else {
        form.getTree().appendChild(template);
      }   
    }   

    // preEvaluate all other properties
    for(let idx in templateList) {
      const template = templateList[idx];
      for(let property in template.properties) {
        const env = {form: form, map: map, template: template, property: property};
        preEvaluate(template.properties[property], env);
      }   
    }   

    const dataQueue = []; 

    for(let i in templateList) {
      if(templateList[i].query) {
        dataQueue.push(resourceProvider('query', {template:templateList[i], source: map.getDbInfo().Source}));
      }   
    }   

    resolve(Promise.all(dataQueue));
  });
}

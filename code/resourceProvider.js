function (type, resource) {
  return new Promise( function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    switch(type) {
      case "vismfile":
      case "visfile":
        if(resource.method === 'GET') {
          xhr.open('GET', './files/' + resource.filename);
          xhr.send();
        } else if(resource.method === 'POST') {
          xhr.open('POST', './files/' + resource.filename, true);
          xhr.setRequestHeader("Content-type", "application/plain");
          xhr.send(resource.content);
        }
        break;
      case "dataResource":
        xhr.open('GET', './dataResource/' + resource);
        xhr.send();
        break;
      case "dataSchema":
        xhr.open('GET', resource + 'schema');
        xhr.send();
        break;
      case "query":
        var template = resource;
        var translator = uvis.getQueryTranslator();
        var q = translator(template.query);
        xhr.open('GET', './query/' + q);
        xhr.send();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var stream = xhr.responseText;
            dataProto = {
              getData: function (resourceName) {
                if(this.data.name === resourceName) {
                  return this.data.data;
                }
              }
            }
            template.data = JSON.parse(stream)[0];
            resolve(stream);
          }
        };
        break;
      default:
        throw new Error("no handler for type: '" + type + "'.");
    }
}
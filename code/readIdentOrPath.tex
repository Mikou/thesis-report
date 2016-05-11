function readIdentOrPath() {                                                                

  let path = [];
  let id = "";
  let isPath = false;
  
  while( isPathSeparator(input.peek()) || isId(input.peek())){       
    if(input.eof()) break;
    id = readWhile(isId);                                                                            
    const pathGroup = {};
    pathGroup['id'] = {type:'id', value:id};                                                         
    if(isPathSeparator(input.peek())) {                                                         isPath = true;                                                                            pathGroup['separator'] = {type:'pathSeparator', value:input.next()};                      path.push(pathGroup);                                                                   }
  }       
  if(id.toUpperCase() === 'WHERE') {                                                            return {type:"op", value:"WHERE"};                                                      
  }                                                                                                  
  if(path.length !== 0) {
    return { type: 'path', path: path }       
  } else {
    return { type: 'id', value: id } 
  }                                                                                                  
}
visParser.init({
  tokenizer: tokenizer(streamReader(visMap.startUpFormStream)), 
  canvas: visCanvas, 
  form: formModule
}); 

visParser.Parse();
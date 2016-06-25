visParser.init({
  tokenizer: tokenizer(streamReader(visStream)), 
  canvas: canvas, 
  form: form
}); 

visParser.parse();
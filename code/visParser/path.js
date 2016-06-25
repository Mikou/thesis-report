{
  type:'path',
  content: {type:'id', value:'Map'},
  next: {
    type:'path',
    content: {type:'punc', value:'.'},
    next: {
      type:'path',
      index: {type: 'num', value: 3},
      content: {type:'id', value:'Person'},
      next: {
        type:'path',
        content: {type:'punc', value: '!'},
        next: {
          type:'path',
          content: {type:'id', value:'Name'}
        }
      }
    }
  }
}
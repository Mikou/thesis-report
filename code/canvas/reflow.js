function reflow (context) {

  const h = {};

  traverseTree(tree, function(Component) {
    const zindex = Component.getProperty("ZIndex").getValue();
    const keysSorted = Object.keys(h).sort(function(a,b){return h[a]-h[b]});
    if(h.hasOwnProperty(zindex)) {
      h[zindex].push(Component);
    } else {
      const arr = [];
      arr.push(Component);
      h[zindex] = arr;
    }

    for(let z=0, len=keysSorted.length; z<len; z++) {
      const Components = h[keysSorted[z]];
      for(let i=0, len=Components.length; i<len; i++) {
        Components[i].draw(context);
      }
    }
  });
}
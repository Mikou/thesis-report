function(context) {
  const border = this.getProperty("Border").getValue();
  const color = this.getProperty("Color").getValue();
  const bgCol = this.getProperty("BackgroundColor").getValue();
  const l = this.getProperty("Left").getValue();
  const t = this.getProperty("Top").getValue();
  const w = this.getProperty("Width").getValue();
  const h = this.getProperty("Height").getValue();

  context.beginPath();
  context.fillStyle = bgCol;
  context.fillRect(l, t, w, h); 
  context.fill();

  if(border) {
    context.strokeStyle = color;
    context.lineWidth   = border;
    context.strokeRect(l, t, w, h); 
  }   
  context.closePath();
}   

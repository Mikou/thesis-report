registerComponent('Base', {
    abstract: true,
    children: [],
    properties: {
      Top:    { initialValue: 10,  validator: getValidator('integer')},
      Bottom: { initialValue: 0,   validator: getValidator('integer')},
      Left:   { initialValue: 10,  validator: getValidator('integer')},
      Width:  { initialValue: 100, validator: getValidator('integer')},
      Height: { initialValue: 50,  validator: getValidator('integer')},
      Color:  { initialValue: 'Black', validator: getValidator('color')},
      BackgroundColor: { initialValue: 'White', validator: getValidator('color')},
      Border: { initialValue: 1,   validator: getValidator('integer')},
      ZIndex: { initialValue: 0, validator: getValidator('integer')},
    },
    getProperty: function (name) {
      // (1) lookup in the local properties
      for(var prop in this.properties)
        if(name === prop) return this.properties[prop];
      // (2) otherwise lookup in the prototype's properties
      const prototype = Object.getPrototypeOf(this);
      if(prototype.hasOwnProperty('properties'))
        return this.getProperty.call(prototype, name);
      // (3) The property was not found
      throw new Error("property " + name + " does not exist.");
    },
    setProperty: function (name, value) {
      var property = this.getProperty(name);
      property.setValue(value);
      return property;
    },
    resetProperty: function (name) {
      var property = this.getProperty(name);
      property.resetValue();
    },
    appendChild: function (Component) {
      this.children.push(Component);
      reflow(context);
    }
});
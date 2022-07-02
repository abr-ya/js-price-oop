export class ElementAttribute {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

export class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) this.render();
  }

  render() {}

  createElement(tag, cssClasses, attributes) {
    const element = document.createElement(tag);
    if (cssClasses) element.className = cssClasses;
    if (attributes && Array.isArray(attributes)) {
      for (const attr of attributes) {
        element.setAttribute(attr.name, attr.value)
      }
    }
    document.getElementById(this.hookId).append(element);
    
    return element;
  }
}
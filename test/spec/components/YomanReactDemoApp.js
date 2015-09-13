'use strict';

describe('YomanReactDemoApp', () => {
  let React = require('react/addons');
  let YomanReactDemoApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    YomanReactDemoApp = require('components/YomanReactDemoApp.js');
    component = React.createElement(YomanReactDemoApp);
  });

  it('should create a new instance of YomanReactDemoApp', () => {
    expect(component).toBeDefined();
  });
});

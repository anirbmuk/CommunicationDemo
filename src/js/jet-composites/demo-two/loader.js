/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./demo-two-view.html', './demo-two-viewModel', 'text!./component.json', 'css!./demo-two-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('demo-two', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);
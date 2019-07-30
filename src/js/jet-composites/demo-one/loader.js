/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./demo-one-view.html', './demo-one-viewModel', 'text!./component.json', 'css!./demo-one-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('demo-one', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);
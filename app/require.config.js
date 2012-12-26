(function (global, undefined) {
  'use strict';

  require.config({
    waitSeconds: 20,
    paths: {
      jquery: '../assets/libs/jquery-1.7.1.min',
      underscore: '../assets/libs/underscore-min',
      backbone: '../assets/libs/backbone-min',
      marionette: '../assets/libs/marionette-min',

      cookies: '../assets/plugins/jquery.cookie'
      //handlebars: '../libs/hbs/Handlebars',
      //text: '../libs/require/text',
    },
    shim: {
      jquery: {
        exports: 'jQuery'
      },
      underscore: {
        exports: '_'
      },
      marionette: {
        deps: ['backbone', 'underscore'],
        exports: 'Marionette'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      cookies: {
        deps: ["jquery"]
      }
      // handlebars: {
      //   exports: 'Handlebars'
      // }
    }
  });

define([
  'jquery',
  'app.init',
  'app.router',
  'app.session'
], function($, App, router, session) {
  'use strict';

  $(function() {

    App.Router = router;
    App.start();

  });
});
}(window));
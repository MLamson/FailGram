;(function (){
  
  app.MainRouter = Backbone.Router.extend({

    initialize: function () {

    },

    routes: {
      '' : 'home',
      'add' : 'add'
    },

    home: function () {
      app.homeView = new app.HomeView({ collection : app.myPhotos });
    },

    add: function () {
      app.uploadView = new app.UploadView();
    }

  });

}());
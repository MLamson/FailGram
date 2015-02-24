;(function (){
  
  // Instance of Collection
  app.myPhotos = new app.Album();

  app.myPhotos.fetch().done(function () {
    // Fire up our Route
    app.router = new app.MainRouter();
    Backbone.history.start();
  });


}());
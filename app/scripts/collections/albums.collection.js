;(function (){
  
  app.Album = Backbone.Collection.extend({

    model: app.Photo,

    url: app.rootURL + 'classes/Photo',

    parse: function (response) {
      return response.results;
    }

  });

}());
;(function (){
  
  app.HomeView = Backbone.View.extend({

    className: 'photoArea',

    template: _.template($('#photoTemp').html()),

    initialize: function (args) {
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);
    },

    render: function () {
      var self = this;

      this.collection.each( function (photo) {
        self.$el.append(self.template(photo.attributes));
      });

    }

  });

}());
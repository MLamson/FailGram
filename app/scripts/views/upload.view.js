;(function (){
  
  app.UploadView = Backbone.View.extend({

    className: 'uploadArea',

    events: {
      'click .addPhoto' : 'addPhoto',
      'click .uploadPhoto' : 'uploadPhoto'
    },

    template: $('#upload').html(),

    initialize: function () {
      this.render();
      $('.container').html(this.el);
    },

    render: function () {
      this.$el.html(this.template); 
    },

    addPhoto: function () {
      filepicker.pick(
        function (data) {
          var img = '<img src="'+data.url+'" />';
          $('.photoArea').html(img);
        }
      );
    },

    uploadPhoto: function () {
      var photoURL = $('.photoArea img').attr('src');
      
      var photo = {
        url: photoURL
      };
      filepicker.store(photo, {}, function(data){

          var a = new app.Photo({
            photo: data.url,
            comment: $('.photoDesc').val()
          });

          app.myPhotos.add(a).save().done( function () {
            $('.photoArea').empty();
            $('.photoDesc').val('');
          
            app.router.navigate('', { trigger: true });

          });

      });
    }

  });

}());
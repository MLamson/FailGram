;(function (){
  
  // Global Object
  window.app = {};

  app.rootURL = 'https://api.parse.com/1/';

  // Parse Headers
  $.ajaxSetup({
    headers: {
      'X-Parse-Application-Id' : 'eQTTBokkgHZUC692PuadyrxeMcQw8exbhxDNHcaN',
      'X-Parse-REST-API-Key' : 'NpVr883gBoEdsIaj97HRkgFYs53weZlroQO7wOzf'
    }
  });

  // Filepicker Setup
  filepicker.setKey("AS54NhsmT4CV3j5dMd0XWz");

}());
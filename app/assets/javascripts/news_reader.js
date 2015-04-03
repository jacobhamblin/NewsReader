window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    var $main = $('#main');
    var router = new this.Routers.Router({$el: $main});
    Backbone.history.start();
  }
};

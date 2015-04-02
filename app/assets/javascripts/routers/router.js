NewsReader.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$el = options.$el;
    this._feeds = new NewsReader.Collections.Feeds();
    this._feeds.fetch();
  },

  routes: {
    "" : "feedIndex",
    "feeds/:id": 'feedShow'
  },

  feedIndex: function () {
    var view = new NewsReader.Views.FeedIndex({ collection: this._feeds });
    this.$el.html(view.render().$el);
  },

  feedShow: function(id) {
    var feed = this._feeds.getOrFetch(id);
    feed.fetch();
    var view = new NewsReader.Views.FeedShow({ model: feed });
    this.$el.html(view.render().$el);
  },

});

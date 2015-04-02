NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: '/api/feeds',

  model: NewsReader.Models.Feed,

  getOrFetch: function(id) {
    var feed;
    if (this.get(id)) {
      feed = this.get(id);
    } else {
      feed = new NewsReader.Models.Feed({id: id});
    }
    feed.fetch({
      success: function(model) {
        this.add(model);
      }.bind(this)
    });
    return feed;
  },

});

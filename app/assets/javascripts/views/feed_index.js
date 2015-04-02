NewsReader.Views.FeedIndex = Backbone.View.extend ({
  template: JST['feeds/index'],

  events: {
    "submit": "addFeed"
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync remove', this.render);
    this.subviews = [];
  },

  removeSubviews: function () {
    this.subviews.forEach(function(subview) {
      subview.remove();
    });
    this.subviews = [];
  },

  remove: function () {
    this.removeSubviews;
    Backbone.View.prototype.remove.call(this);
  },

  render: function () {
    this.removeSubviews;
    this.$el.html(this.template());
    this.collection.each(function(feed) {
      var view = new NewsReader.Views.FeedIndexItem({model: feed});
      this.subviews.push(view);
      this.$('.feed-index').append(view.render().$el);
    }, this);
    return this;
  },

  addFeed: function (event) {
    event.preventDefault();
    var data = $('.new-feed-form').serializeJSON();
    var feed = new NewsReader.Models.Feed(data);
    feed.save({}, {
      success: function (model) {
        this.collection.add(model);
      }.bind(this)
    });
  }
});

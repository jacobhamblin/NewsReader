NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feeds/show'],

  events: {
    "click button": "refresh"
  },

  initialize: function() {
    this.listenTo(this.model, "sync remove", this.render);
    this.subviews = [];
  },

  removeSubviews: function () {
    this.subviews.forEach(function(subview) {
      subview.remove();
    });
    this.subviews = [];
  },

  remove: function() {
    this.removeSubviews();
    Backbone.View.prototype.remove.call(this);
  },

  render: function() {
    var content = this.template({feed: this.model});
    this.removeSubviews();
    this.$el.html(content);
    this.model.entries().each( function(entry) {
      var view = new NewsReader.Views.EntryShow({ model: entry });
      this.subviews.push(view);
      this.$('.entry-list').append(view.render().$el);
    }.bind(this));

    return this;
  },

  refresh: function(event) {
    event.preventDefault();
    this.model.fetch();
  }
});

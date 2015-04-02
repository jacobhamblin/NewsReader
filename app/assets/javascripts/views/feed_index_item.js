NewsReader.Views.FeedIndexItem = Backbone.View.extend ({
  tagName: 'li',
  template: JST['feeds/index_item'],
  events: {
    "click button": "deleteIndexItem"
  },

  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  },

  deleteIndexItem: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});

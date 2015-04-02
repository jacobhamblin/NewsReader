NewsReader.Views.EntryShow = Backbone.View.extend ({
  template: JST['entries/show'],

  tagName: 'li',

  render: function () {
    var content = this.template({entry: this.model});
    this.$el.html(content);
    return this;
  }
});

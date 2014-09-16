NewsReader.Views.feedsShow = Backbone.View.extend({
  template: JST['feeds/show'],
  
  initialize: function () {
    this.listenTo(this.model, "all", this.render);
    this.listenTo(this.model.entries(), "all", this.render)
  },
  
  render: function(){
    var returnedContent = this.template({
      entries: this.model.entries()
    })
    this.$el.html(returnedContent);
    return this;
  }

  
})
NewsReader.Views.feedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],
  
  // events: {
  //   "collection sync": "render"
  // },
  
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
  },
  
  render: function(){
    var renderedContent = this.template({ 
      collection: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
  

});
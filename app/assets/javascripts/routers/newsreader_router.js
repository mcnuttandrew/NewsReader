NewsReader.Routers.Router = Backbone.Router.extend ({
  routes: {
    "": "index"
  },
  
  initialize: function(el){
    this.$rootEl = el;
  },
  
  index: function() {
    NewsReader.Collections.feeds.fetch();
    // debugger;
    var indexView = new NewsReader.Views.feedsIndex({
      collection: NewsReader.Collections.feeds
    });
    
    this.$rootEl.html(indexView.render().$el);
  },
  
  
});
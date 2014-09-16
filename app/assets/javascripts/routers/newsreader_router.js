NewsReader.Routers.Router = Backbone.Router.extend ({
  routes: {
    "": "index",
    "feeds/:id": "show"
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
  
  show: function(id) {
    var currFeed = NewsReader.Collections.feeds.getOrFetch(id);
    var showView = new NewsReader.Views.feedsShow({
      model: currFeed 
    });
   this.$rootEl.html(showView.render().$el);
  }

  
});
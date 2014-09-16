NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,
  url: function() {
    return this.feed.url() + '/entries'
  },  
  // getOrFetch: function(id) {
  //   var entries = this;
  //   var entry;
  //   if (entry = this.get(id)) {
  //     entry.fetch();
  //   } else {
  //     entry = new NewsReader.Models.Entry({ id: id });
  //     entry.fetch({
  //       success: function() { entries.add(entry); }
  //     });
  //   }
  //   return feed;
  // }
})
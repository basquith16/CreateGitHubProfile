var Router = Backbone.Router.extend({

  routes: {
    "profile": 'showProfile',
    'repositories': 'showRepo'
  },

  showProfile: function() {
    $('nav.li.repositories').removeClass('active');
    $('nav.li.profile').addClass('active');

    $.ajax('profile.html').then(function(page) {
      $('.content').html(page);
    });
  },

  showRepo: function() {
    $('nav.li.profile').removeClass('active');
    $('nav.li.repositories').addClass('active');

    $.ajax('repositories.html').then(function(page) {
      $('.content').html(page)
    });
  },

  initialize: function() {
    Backbone.history.start();
  }
});


$(function() {
  var router = new Router();
  console.log('new router')
});


// var Repositories = Backbone.Collection.extend({
//   url: 'https://api.github.com/users/basquith/repos'
//     // model: Repository
// });
//
// var IndivRepoView = Backbone.View.extend({
//   initialize: function() {},
//   render: function() {
//     return $('name');
//   }
// });
//
// var RepoView = Backbone.View.extend({
//   initialize: function() {
//     this.repoViews = [];
//     this.collection = new Repositories();
//
//     this.collection.fetch().then(function(repos) {
//       _.each(repos, function(repo) {
//         this.repoViews.push(new IndivRepoView({
//           model: repo
//         }));
//       }.bind(this));
//     }.bind(this));
//     this.render();
//   },
//
//   render: function() {
//     _.each(this.repoViews, function(view) {
//       var poop = $(this.el).append(view.render());
//       console.log(poop);
//     });
//
//     $('.content').html(this.el);
//   }
// });

const API_ROOT = "https://api.github.com/users/basquith16"


$(function() {
  $('.sidebar').ready(function(event) {
    $.ajax({
      type: 'GET',
      url: API_ROOT,
      data: $(this).serialize()
    }).done(function(data) {
      $('.sidebar h3').text(data.name);
      $('.sidebar h4').text(data.login);
      //$('.sidebar p').text(data.created_at);
      $('.followers').text(data.followers);
      $('.following').text(data.following);

    });
  })
})

var Router = Backbone.Router.extend({

  routes: {
    '': 'showProfile',
    ':name/repos': 'showRepos'
  },

  showProfile: function() {
    $.get('profile.html').then(function(page) {
      $('.content').html(page);
    })
  },

  showRepos: function() {
    $.get('repositories.html').then(function(page) {
      $('.content').html(page);
      var data = $.get(
        API_ROOT + '/repos',
        function(data) {
          $(this).serialize();
        });
    })
  },
})


$(function() {
  const router = new Router();
  Backbone.history.start();
});

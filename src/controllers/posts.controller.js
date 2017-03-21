'use strict';
// Posts Controller
function PostsController() {
  this.$addPost = $('#add_post');
  this.$postTitleInput = $('#post_title');
  this.$postUrlInput = $('#post_url');
  this.$selectPostMenu = $('#select_post');
  this.$addCommentForm = $('#add-comment');
  this.$wrapper = $('#wrapper');
}

PostsController.prototype.hideCommentForm = function(){
  this.$addCommentForm.hide(); // initially hide add comment form
};

PostsController.prototype.destroyPostLiveEventListener = function(){
  var self = this;
  this.$wrapper.on('click', '.destroy-post', function(){ //live event postener
    var postId = parseInt($(this).parents('h2').next('ul').data('id'));
    Post.all.splice(postId, 1, null);
    self.$selectPostMenu.find('option[value="'+postId+'"]').remove();
    $(this).parents('.post').remove();
  });
};

PostsController.render = function(post) {
  $('#posts').append(post.postEl());
};

PostsController.prototype.init = function() {
  this.hideCommentForm();
  this.destroyPostLiveEventListener();
  Post.load()
};

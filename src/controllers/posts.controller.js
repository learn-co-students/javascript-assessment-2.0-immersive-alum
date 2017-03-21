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

PostsController.postEl = function(post) {
  return '<div class="post"><h2><button class="destroy-post">x</button> '+post.title+'</h2><ul id="post-'+post.id+'" data-id="'+post.id+'"><img src="'+post.url+'"></img><p id="upvote-number-'+post.id+'"></p><button id="upvote-'+post.id+'" class="upvote" data-id="'+post.id+'">UpVote</button><p id="downvote-number-'+post.id+'"></p><button id="downvote-'+post.id+'" class="downvote" data-id="'+post.id+'">DownVote</button><ul id="comments-'+post.id+'"></ul><form id="add-comment" class="add-comment" data-id='+post.id+' action="#" method="post"><label for="comment-description">Comment: </label><input type="text" id="comment-description-'+post.id+'" class="user-text" name="comment-description" placeholder="comment"><input type="submit" value="(+) add comment"></form></ul></div>';
};

PostsController.render = function(post) {
  $('#posts').append(this.postEl(post));
};

PostsController.prototype.init = function() {
  this.hideCommentForm();
  this.destroyPostLiveEventListener();
  Post.load()
};

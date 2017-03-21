// Initialize

$(function() { // on document ready
  postsController = new PostsController();
  postsController.init();
  commentsController = new CommentsController();
  commentsController.init();
  votesController = new VotesController();
  votesController.init();
});

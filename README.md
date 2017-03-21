# JavaScript Assessment 2.0

For this assignment, we'll be working with an Reddit-style domain. We have three models - Post, Comment and Vote.
For our purposes, a Post has many Comments, a Comment belongs to a Post, a Post has one Vote and a Vote belongs to a Post.

## Topics

+ Class vs Instance methods in ES6
+ Object Relationships
+ DOM manipulation with jQuery or vanilla JS
+ Event Listeners

## Notes

Your goal is to build out all of the methods listed in the deliverables. Do your best to follow JavaScript best practices.

To run your html:

- Inside your cloned down folder, in terminal, type `pwd` to get your full file path. Copy and paste that path into your browser url and include `/index.html` to the end of that path.

**To Submit** - once you've completed all the deliverables, please copy/paste your three class definitions into the `solution.js` file. Please don't submit the lab until we give you the signal. 

## Deliverables

Build out the following methods on the `CommentsController` class (Use ES6 syntax)

+ `CommentsController.prototype.addCommentFormListener()`
  + iterates through each comment form and adds an eventlistener to trigger a function on form submit
  + function should grab the postId + comment and create a new Comment with those arguments
  + execute the render function on that found post object to append the new comment
+ `CommentsController.prototype.commentEl(comment)`
  + returns a string of html
    + html has an `li` tag with an `id` field and shows the comment
+ `CommentsController.prototype.render(commentObject)`
  + selects the appropriate `ul` for this comment to be added to
  + appends the new comment element to this `ul`
  + Don't try to copy the `PostsController.render` function because that is implemented different

Build the following on the `Comment` class model (Use ES6 syntax)

+ `new Comment(comment, postId)`
  + should initialize with an id, post object (findPost) and commentContent (the actual text of the comment)
  + should save new comment to Comment.all property
+ `Comment.all`
  + should return all of the comment objects in an array
  + a property of the Comment class
+ `Comment.prototype.findPost(postId)`
  + given an `int` for an post id, returns the post object with that id
  + before return - adds current comment to post's comments property

Build out the following methods on the `VotesController` class (Use ES2015 syntax)

+ `VotesController.prototype.init()`
  + executes the `addUpVoteListener()` and `addDownVoteListener()` functions
+ `VotesController.prototype.addUpVoteListener()`
  + iterates through each up vote button and adds an eventlistener to trigger a function on button click
  + function should grab the postId and find the post object
  + create a new Vote with the found post object or update the post's existing Vote object
  + call the `Vote.prototype.increment()` function
  + execute the `update` function on that post to re-append the Vote object
+ `VotesController.prototype.addDownVoteListener()`
  + iterates through each down vote button and adds an eventlistener to trigger a function on button click
  + function should grab the postId and find the post object
  + create a new Vote with the found post object or update the post's existing Vote object
  + call the `Vote.prototype.decrement()` function
  + execute the `update` function on that post to re-append the Vote object
+ `VotesController.prototype.update(post)`
  + select the appropriate `#vote-number-` based on the post object's id
  + put the new vote count here

Build the following on the `Vote` class model (Use ES2015 syntax)

+ `new Vote(post)`
  + should initialize with an id, post object and count (the actual vote number). Start count at 0.
  + should save new comment to Vote.all property
+ `Vote.all`
  + should return all of the vote objects in an array
  + a property of the Vote class
+ `Vote.prototype.increment()`
  + increases count property by one
+ `Vote.prototype.decrement()`
  + decreases count property by one


**NOTE:** All of the above will be tested thouroughly, so make sure your associations are working properly!
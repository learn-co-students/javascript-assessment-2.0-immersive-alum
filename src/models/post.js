'use strict';
// PostModel

function Post(title, url) {
  this.id = this.constructor.all.length;
  this.title = title;
  this.url = url;
  this.comments = [];
  this.constructor.all.push(this);
}

Post.prototype.postEl = function() {
  return '<div class="post"><h2><button class="destroy-post">x</button> '+this.title+'</h2><ul id="post-'+this.id+'" data-id="'+this.id+'"><img src="'+this.url+'"></img><p id="upvote-number-'+this.id+'"></p><button id="upvote-'+this.id+'" class="upvote" data-id="'+this.id+'">UpVote</button><p id="downvote-number-'+this.id+'"></p><button id="downvote-'+this.id+'" class="downvote" data-id="'+this.id+'">DownVote</button><ul id="comments-'+this.id+'"></ul><form id="add-comment" class="add-comment" data-id='+this.id+' action="#" method="post"><label for="comment-description">Comment: </label><input type="text" id="comment-description-'+this.id+'" class="user-text" name="comment-description" placeholder="comment"><input type="submit" value="(+) add comment"></form></ul></div>';
};

Post.load = function() {
  Post.defaults.map(function(post){
    var newPost = new Post(post.title, post.url)
    PostsController.render(newPost)
  })
}

Post.all = [];
Post.defaults = [
  {
    title: 'The Perfect Date',
    url: 'https://s3.amazonaws.com/learn-verified/perfectDate.png'
  },
  {
    title: 'Back-end v. Front-end',
    url: 'https://s3.amazonaws.com/learn-verified/backVFront.jpg'
  },
  {
    title: 'Good Programmer',
    url: 'https://s3.amazonaws.com/learn-verified/goodProgrammer.png'
  },
  {
    title: 'Need Snek',
    url: 'https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg'
  },
  {
    title: 'Risky Captcha',
    url: 'https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg'
  },
  {
    title: 'Amazon Sync Loader',
    url: 'https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif'
  },
  {
    title: 'Just Kidding',
    url: 'https://s3.amazonaws.com/learn-verified/woopsNevermind.png'
  },
  {
    title: 'Assembly v. The World',
    url: 'https://s3.amazonaws.com/learn-verified/divideBy10.png'
  },
  {
    title: 'WaffleBoard',
    url: 'https://s3.amazonaws.com/learn-verified/waffleBoard.png'
  },
  {
    title: 'The Bat Strikes Again',
    url: 'https://s3.amazonaws.com/learn-verified/NaNx10Batman.png'
  }
];

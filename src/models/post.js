'use strict';
// PostModel

function Post(title, url) {
  this.id = this.constructor.all.length;
  this.title = title;
  this.url = url;
  this.comments = [];
  this.constructor.all.push(this);
}

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

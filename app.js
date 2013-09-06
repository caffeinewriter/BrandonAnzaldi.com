var
  express = require('express'),
  app = express(),
  Poet = require('poet');

var readMoreButton = function readMoreLink(post) {
  var anchor = '<div class="medium primary button"><a href="' + post.url + '"';
  anchor += ' title="Read more of ' + post.title + '">read more</a></div>';
  return '<p>' + anchor + '</p>';
}

var poet = Poet(app, {
  postsPerPage: 5,
  posts: './_posts',
  metaFormat: 'json',
  readMoreLink: readMoreButton,
  routes: {
    '/blog/:post': 'post',
    '/page/:page': 'page',
    '/tag/:tag': 'tag',
    '/category/:category': 'category'
  }
});

poet.watch(function () {
  // watcher reload
  var readMoreButton = function readMoreLink(post) {
    var anchor = '<div class="medium primary button"><a href="' + post.url + '"';
    anchor += ' title="Read more of ' + post.title + '">read more</a></div>';
    return '<p>' + anchor + '</p>';
  }
}).init().then(function () {
  // initialized
  var readMoreButton = function readMoreLink(post) {
    var anchor = '<div class="medium primary button"><a href="' + post.url + '"';
    anchor += ' title="Read more of ' + post.title + '">read more</a></div>';
    return '<p>' + anchor + '</p>';
  }
});

var port = app.env.PORT || 3000;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(app.routes);

app.get('/', function (req, res) { res.render('index');});

app.get('/sitemap.xml', function (req, res) {
  var postCount = poet.helpers.getPostCount();
  var posts = poet.helpers.getPosts(0, postCount);
  res.setHeader('Content-Type', 'application/xml');
  res.render('sitemap', { posts: posts });
});

app.get('/rss', function (req, res) {
  // Only get the latest posts
  var posts = poet.helpers.getPosts(0, 5);
  res.setHeader('Content-Type', 'application/rss+xml');
  res.render('rss', { posts: posts });
});

app.listen(port);

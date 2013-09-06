{{{
    "title"    : "Return of the Prodigal Coder",
    "tags"     : [ "introspection", "musings" ],
    "category" : "brandon",
    "date"     : "9-5-2013"
}}}

I told myself a lot of things. "I'll set up my blog again when [Ghost](http://tryghost.org/) comes out," was near the top of that list. Then I realized that I needed my creative outlet. Sure, I could write for myself, but where's the excitement when you know that nobody is going to see that set of words but you. <!--more--->So I sat down, and I learned about the beautiful platform that is [Poet](http://jsantell.github.io/poet/), and built my own thing out of it. Is it perfect? No. Is it mine? Enough for me to be happy about it.

I built a theme using [Gumby](http://gumbyframework.com), and tweaked it all to hell. I even tried to make a script that would back up my posts to Mega, but alas, it worked out terribly. I'll go ahead and post my attempt below. Perhaps someone can make it work, and find some use for it. Regardless, it's late. Well, rather early, and I have much to do. Until we meet again, netizen. 

<pre><code data-language="javascript">if(upToMega) {
    var d = new Date();
    var timestamp = Math.floor(d.getTime()/1000);
    var storage = Mega({
      email: email,
      password: password,
      autoload: false
    }, function (err) {
      if (err) throw err;
    });
    var postfiles = fs.readdirSync(__dirname + '/_posts/');
    for(var i=0;i&lt;postfiles.length;i++) {
      fs.createReadStream(__dirname + '/_posts/' + postfiles[i]).pipe(storage.upload(postfiles[i] + '.poet'));
      }
      console.log('Successfully backed up to Mega.');
    }
</code></pre>
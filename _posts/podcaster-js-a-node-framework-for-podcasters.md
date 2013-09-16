{{{
    "title"    : "Podcaster.js - A Node Framework for Podcasters",
    "tags"     : [ "technology", "coding" ],
    "category" : "coding",
    "date"     : "9-16-2013"
}}}

Well, I finally created my first full fledged Node.js app, and I did it all in one afternoon. Well... Finishing at 23:37 doesn't really count as an afternoon, but it was still close enough to it for me to find it intriguing.

<!--more--->

I've taken several forays into Node, but never anything from "scratch". I use this term loosely, since it's near impossible to create any node application without using external modules, which I opted to do, because why not? Now on to talking about the application itself. It's designed to create an iTunes compatible RSS feed for a podcast with relatively little intervention from the author (other than simple JSON files). Please, give it a look over at [Github](http://caffeinewriter.github.io/podcaster-js). 

This is definitely beta, maybe even earlier than that, but I don't really want to call it alpha, since it's working. However, despite what I want to call it, it is more like alpha software. There are a lot of TODOs left on it, including something that I should have included right away, which is default values, but all in due time. 

I hope someone is able to use this. I believe it is compatible with Heroku, however I'd recommend getting an S3 bucket or some similar thing to host your podcast files on specifically, since it's never good to host anything important on an ephemeral disk. Stay tuned for more updates on Podcaster.js.
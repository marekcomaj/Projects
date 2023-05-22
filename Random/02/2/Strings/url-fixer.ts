'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

var missing = ":";

var position = 5;

var link = [url.slice(0, position), missing, url.slice(position)].join('');

link =  link.replace(/bots/, 'odds'); 


console.log(link);


// https://www.reddit.com/r/nevertellmetheodds/
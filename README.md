# this__vid3
The revival of the objectively best Twitter video downloader bot ever known =^)

## How to get Started!
You have to use bash (or terminal) in something like Ubuntu or something nerdy like that.

This bad boy requires Node.js, FFmpeg, and SQLite3:

```shell
sudo apt install nodejs ffmpeg sqlite3
```
Next you gotta make sure everything is extracted neatly in a lil' folder, yeah?
And then you make sure that the terminal is in the folder you extraced everything
into with cd then the directory...
```shell
cd /Downloaded/using/this__vid3/
```
Just replace the /Downloaded/using/this__vid3/ with the actual directory though.

You got it? Yeah? Well when they're installed, install the required modules using npm:
```shell
npm install
```

Then, create the database using sqlite3:
```shell
sqlite3 tweets.sqlite

sqlite> .exit
```

Finally, put your consumer key/secret and access token/secret obtained from the [Twitter apps page](https://developer.twitter.com/apps) inside `config.json` and run `node app.js`.

## Disclaimer
This is a parody of video downloader bots and does not actually send users download links. If you need an actual Twitter video downloader, I recommend [youtube-dl](http://ytdl-org.github.io/youtube-dl/).

**I AM NOT RESPONSIBLE FOR ANYTHING THAT HAPPENS TO YOUR ACCOUNT AS A RESULT OF HOSTING THIS.**

Original @this_vid by [shalvah](https://twitter.com/theshalvah).

Original @this_vid2 by [TheEssem](https://twitter.com/TheEssem).

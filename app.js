const generateVideo = require("./generateVideo.js");
const fs = require("fs-extra");
const myArgs = process.argv.slice(2);
fs.access("./cache/").catch(error => {
  if (error) fs.mkdir("./cache/");
});

if(myArgs[0]) generate();
else return console.log("Yo, you didn't import a source!");

async function generate()
{
  const randomFilename = Math.random().toString(36).substring(2, 15);
  const fileName = `./cache/${randomFilename}.mp4`;
  fs.copyFileSync(myArgs[0],fileName)
  const outputPath = await generateVideo(fileName);
  await fs.remove(fileName);
  const messages = [
    "Generated!",
    "Here's your video!",
    "Take a look, y'all:",
    "Check it out:",
    "Done!",
    "Generation complete!",
    "Here you go!",
    "I got it!",
    "Easy!",
    "I'm here!",
    "Don't Worry! =)",
    "Gotcha!",
    "Like this?",
    "Beep boop",
    "Sure thing!",
    "Got it boss!",
    "Sorted.",
    "I got it!",
    `Your video, sir!`,
    `Your video has been generated!`,
    "Finished!"
  ];
  const content = `${messages[Math.floor(Math.random() * messages.length)]} ${outputPath}`;
  return console.log(content);
}
const spinner = function() {
  let spinnerFrames = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', `\n`]
  let frameTimer = -100;
  spinnerFrames.forEach(frame => {
    frameTimer += 200;
    setTimeout(() => {
      process.stdout.write(frame);
    }, frameTimer);
  })
}

spinner();
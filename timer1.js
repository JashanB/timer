let argv = process.argv.slice(2);
let timer = 0;
argv = argv.sort((a,b) => a - b);
for (let time of argv) {
  timer = time * 1000;
  if (argv === []) {
    return console.log('no alarm set');
  }
  if (time < 0 || time == NaN) {
    time++;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
};
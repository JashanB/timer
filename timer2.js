const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
let object = {
  1: 1000,
  2: 2000,
  3: 3000,
  4: 4000,
  5: 5000,
  6: 6000,
  7: 7000,
  8: 8000,
  9: 9000
};

stdin.on('data', key => {
  if (key === '\u0003') {
    console.log('\n');
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (object[key]) {
    process.stdout.write(`setting timer for ${key} seconds...`);
    let time = object[key];
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time)
  } else {
    console.log('Input invalid');
  }
});
const charArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;
for (let char of charArray) {
  delay += 200;

  setTimeout(() => {
    process.stdout.write('\r');
    process.stdout.write(char);
    process.stdout.write('\t');
    
  }, delay);
}

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\n');
}, delay);

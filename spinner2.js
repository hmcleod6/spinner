const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\\n'];

let time = 500;

for (let i in spinner) {
  setTimeout(function() {
    process.stdout.write(`\r${spinner[i]}`);
  }, time);
  time += 500;
};
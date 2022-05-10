// let spinner = 'heather\n';

// for (let i of spinner) {
//     setTimeout(() => {
//       process.stdout.write(i); //0 = gives hhhhhhhh
//     }, 1000);
// }

const spinner = ['\r|', '\r/', '\r-', '\r\\','\r|', '\r/', '\r-', '\r\\\n'];

let time = 500;

for (let i in spinner) {
    setTimeout(function () {
      process.stdout.write(spinner[i]);
    }, time);
    time += 500;
};
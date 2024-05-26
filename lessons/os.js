const os = require("os");
const cluster = require("cluster");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

const cpus = os.cpus();

if (cluster.isMaster) {
  for (let i = 0; i < cpus.length; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`воркер с pid=${worker.process.pid} умер`);
    cluster.fork();
  });
} else {
  console.log(`воркер с pid ${process.pid}`);

  setInterval(() => {
    console.log(`воркер с pid ${process.pid} все еще работает`);
  }, 5000);
}

// console.log(process.pid);

// while (true) {}

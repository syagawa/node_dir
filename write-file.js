const fs = require("fs");
const path = require("path");

const cwd = process.cwd();

const [node, js_file, ...argvs] = process.argv;

const filename = argvs[0];
const mes = argvs[1];

const err_mes = "Can't write file";

console.log(__dirname);
console.log(cwd);


fs.writeFile(
  filename + "_plane",
  mes,
  function(err){
    if(err){
      return console.log(err_mes);
    }
  }
);
fs.writeFile(
  path.join(cwd, filename + "_cwd_whit_path"),
  mes,
  function(err){
    if(err){
      return console.log(err_mes);
    }
  }
);


fs.writeFile(
  __dirname + "/" + filename + "_dirname",
  mes,
  function(err){
    if(err){
      return console.log(err_mes);
    }
  }
);

fs.writeFile(
  path.join(__dirname, filename + "_dirname_with_path"),
  mes,
  function(err){
    if(err){
      return console.log(err_mes);
    }
  }
);

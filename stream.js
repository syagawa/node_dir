const fs = require("fs");

const ws = fs.createWriteStream("stream.txt", { encoding: "utf8" });
ws.write("1 line\n");
ws.write("2 line\n");
ws.write("3 line\n");
ws.end("4 line");

const rs = fs.createReadStream("stream.txt", { encoding: "utf8"});
rs.on("data", function(data){
  console.log(data);
});
rs.on("end", function(data){
  console.log(data);
});


const rs1 = fs.createReadStream("stream.txt", { encoding: "utf8"});
const ws1 = fs.createWriteStream("stream_copy.txt", { encoding: "utf8" });
rs1.pipe(ws1);
ws1.write("aaaa");
rs1.pipe(ws1);
rs1.pipe(ws1);

// ws1.write("1 item\n");
// ws1.write("2 item\n");
// ws1.write("3 item\n");
// rs1.pipe(ws1);
// ws1.end();
// rs1.on("end", function(data){
//   console.log(data);
// });


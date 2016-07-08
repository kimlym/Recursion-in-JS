var x = {
  "agents": {
    "tom":{
      "clients":{
        "sam":100
      }
    }
  },
  "clients":{
    "tom":100
  }
}
var results = [];
var summary = [];
var content = [];
var list = [];

function print(tree,indent){
  var blanks="|";
  for (var prop in tree) {
    for (var y =0;y<indent;y++) {
      blanks += "|";
    }
    if (tree.hasOwnProperty(prop)) {
      if(typeof tree[prop] === 'number'){
        console.log(blanks,prop,tree[prop]);
      }else{
        console.log(blanks,prop);
      }
      print(tree[prop],indent+1);
    }
  }
}


print(x,0);

function extract(x,list){
  for (var k in x) {
    var temp = [];
    if (x.hasOwnProperty(k)) {
      temp.push(k);
      if (typeof x[k] == 'number') {
        temp.push(x[k]);
      }
      extract(x[k],temp);
    }
    list.push(temp);
  }
  // for (var k in x){
  //   if (x.hasOwnProperty(k)) {
  //     list.push(k);
  //     extract(x[k]);
  //     if(list.length>0){
  //       content.push(list);
  //       list = [];
  //       console.log(content);
  //     }
  //   }
  //
  //
  // }
  // content = [];
}
extract(x,summary);
var tab = 1;
var y = 0;
var count= 0;
function log(stuff,indent){
  for (x of stuff) {
    var blanks = "";
    for (var y =0;y<indent;y++) {
      blanks += "|";
    }
    if(!Array.isArray(x)){
      indent;
      console.log(blanks, x);
      continue;
    }
    count++;

    log(x,indent+1);
  }
}
//log(summary,0);

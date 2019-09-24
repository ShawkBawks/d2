const sentence = "hello there from lighthouse lab\n";
const letterCheck=function() {
for (let i=0; i<sentence.length; i++) {
 let char=sentence[i];
  let delay =function (){
    process.stdout.write(char);
  }
  
    setTimeout(delay, 50 + (i*50));
}

};

letterCheck();

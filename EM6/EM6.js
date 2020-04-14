var n = window.prompt("pick a number");
var sum=0;
function addme(){
    sum = 0;
for (i=1;i<=n;i++){
    sum = sum + i
    console.log(sum);
}
document.write(sum);
}
function multiplyme(){
    sum = 1;
for (i=1;i<=n;i++){
    sum = sum * i
    // console.log(sum);
}
document.write(sum);
}

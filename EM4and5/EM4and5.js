var n = window.prompt("pick a number");
var sum = 0;
for(i=0;i<n;i++){
    if((i % 3 === 0 )||(i % 5 === 0)){
    sum = sum + i;
    }
}
document.write(sum);
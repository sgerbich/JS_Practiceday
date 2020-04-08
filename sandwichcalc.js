function sandwichClac(bread, cheese){
    var tempbread= bread;
    var tempcheese= cheese;
    var sandwiches=0
    while (tempcheese > 0 && tempbread > 1){
        sandwiches++;
        tempbread= tempbread -2;
        tempcheese--;
        
    } 
    
    if (cheese < 0 || bread < 1){
        console.log("no more sammiches");
        return 0;
    }
    console.log(sandwiches);
}
sandwichClac(25, 5);
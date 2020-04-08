var toppings = ["pepperoni", "sausage", "bacon", "extra cheese"];
var pizza;
function gimmePizza(){
    console.log(toppings);
    pizza = "heres a delicous pizza with " + (toppings.join(", and "));
    console.log(pizza);
}
gimmePizza();
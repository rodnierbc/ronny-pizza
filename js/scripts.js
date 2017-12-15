//Constanst
const SIZE_SMALL = 'Small(10")';
const SIZE_MEDIUM = 'Medium(12")';
const SIZE_LARGE = 'Large(14")';
const PIZZA_MY_OWN_TYPE = 'My Pizza Type'


function Pizza(pizzaType, pizzaSize, pizzaCheeseSize, pizzaRegularPrice, pizzaId){
  this.pizzaType = pizzaType;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = [];
  this.pizzaSauces = [];
  this.pizzaRegularPrice = pizzaRegularPrice;
  this.pizzaId = pizzaId;
}
Pizza.prototype.finnalPrice = function () {
  var finnalPrice = this.pizzaRegularPrice;
  var oneTopping = 2;
  var oneSauce = 1;
  var pizzaCheeseSizeNormal = 1;

};

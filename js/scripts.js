//Constanst
const SIZE_SMALL = 'Small(10")';
const SIZE_MEDIUM = 'Medium(12")';
const SIZE_LARGE = 'Large(14")';

const SIZE_CHEESE_NORMAL = 'Normal';
const SIZE_CHEESE_EXTRA = 'Extra';
const SIZE__CHEESE_DOBLE = 'Doble';
const NO_CHEESE = 'No Cheese';

const PIZZA_MY_OWN_TYPE = 'My Pizza Type'

//variables
var costumer;
var items =[];
var order;


function Customer(customerFirstName, customerLastName, customerEmail, customerPhone, customerAddres, customerState, customerCity, customerZipCode){
  this.customerFirstName = customerFirstName;
  this.customerLastName = customerLastName;
  this.customerEmail = customerEmail;
  this.customerPhone = customerPhone;
  this.customerAddres = customerAddres;
  this.customerState = customerState;
  this.customerCity = customerCity;
  this.customerZipCode = customerZipCode;
}

Customer.prototype.fullName = function () {
  return this.customerFirstName+" "+this.customerLastName;
};

function Pizza(pizzaType, pizzaSize, pizzaCheeseSize, pizzaRegularPrice, pizzaId){
  this.pizzaType = pizzaType;
  this.pizzaSize = pizzaSize;
  this.pizzaCheeseSize = pizzaCheeseSize;
  this.pizzaToppings = [];
  this.pizzaSauces = [];
  this.pizzaRegularPrice = pizzaRegularPrice;
  this.pizzaId = pizzaId;
}
Pizza.prototype.finnalPrice = function () {//this function calculates the final price of a pizza.
  var finnalPrice = this.pizzaRegularPrice;
  var oneTopping = 2;
  var oneSauce = 1;
  for (var i = 0; i< this.pizzaToppings.length; i++){
    finnalPrice += oneTopping;
  }
  for (var i = 0; i< this.pizzaSauces.length; i++){
    finnalPrice += oneSauce;
  }
  switch (this.pizzaCheeseSize) {
    case SIZE_CHEESE_NORMAL:
      finnalPrice += 1;
      break;
    case SIZE_CHEESE_EXTRA:
      finnalPrice += 2;
      break;
    case SIZE__CHEESE_DOBLE:
      finnalPrice += 3;
      break;
    case NO_CHEESE:
      finnalPrice -= 1;
      break;
  }
  return finnalPrice;
};

function Order(ordeCostumer, oderCode){
  this.ordeCostumer = ordeCostumer;
  this.orderItems =[];
  this.oderCode = oderCode;
}

Order.prototype.finnalPrice = function () {//this function calculates the final price of the order.
  var finnalPrice = 0;
  for(var i =0, i< this.orderItems.length, i++){
    finnalPrice += this.orderItems[i].finnalPrice();
  }
  return finnalPrice;
};



$(function(){
  $('#buildPizzaBtn').click(function(event){
    event.preventDefault();
    $('#buildPizzaModal').modal('toggle');
  })

})

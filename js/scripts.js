//Constanst
const SIZE_SMALL = 'Small(10")';
const SIZE_MEDIUM = 'Medium(12")';
const SIZE_LARGE = 'Large(14")';

const SIZE_CHEESE_NORMAL = 'Normal';
const SIZE_CHEESE_EXTRA = 'Extra';
const SIZE__CHEESE_DOBLE = 'Doble';
const NO_CHEESE = 'No Cheese';

const PIZZA_MY_OWN_TYPE = 'My Pizza Type'
const PIZZA_REGULAR_PRICE = 4;

//variables
var costumer;
var items =[];
var order;
var pizzaIdController =0;


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
  for(var i =0; i< this.orderItems.length; i++){
    finnalPrice += this.orderItems[i].finnalPrice();
  }
  return finnalPrice;
};



$(function(){
  $('#buildPizzaBtn').click(function(event){
    event.preventDefault();
    $('#buildPizzaModal').modal('toggle');
  });
  $('#buildPizzaForm').submit(function(event){
    event.preventDefault();
    $('#buildPizzaModal').modal('toggle');
    var pizzaToppings = [];
    var pizzaSauces = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingItem = $(this).val();
      pizzaToppings.push(toppingItem);
    });
    $("input:checkbox[name=sauce]:checked").each(function(){
      var sauceItem = $(this).val();
      pizzaSauces.push(sauceItem);
    });
    var pizzaCheeseSize = $("input:radio[name=cheese]:checked").val();
    var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizza = new Pizza(PIZZA_MY_OWN_TYPE, pizzaSize, pizzaCheeseSize, PIZZA_REGULAR_PRICE, pizzaIdController);
    pizzaIdController++;
    pizza.pizzaToppings = pizzaToppings;
    pizza.pizzaSauces = pizzaSauces;
    pizza.pizzaRegularPrice = pizza.finnalPrice();
    items.push(pizza);
    $("ul#items").append("<li><span class='items'>" + pizza.pizzaType + " $"+pizza.pizzaRegularPrice+"</span></li>");
    $(".items").last().click(function() {
        for(var i=0; i<pizza.pizzaToppings.length; i++){
          alert();
          $("ul#toppingsDescription").append("<li><h5>" + pizza.pizzaToppings[i] + "</h5></li>");
        }
        for(var i=0; i<pizza.pizzaSauces.length; i++){
          $("ul#saucesDescription").append("<li><h5>"+ pizza.pizzaSauces[i] + "</h5></li>");
        }
        $('h5#pizzaType').text(pizza.pizzaType);
        $('h5#pizzaSize').text(pizza.pizzaSize);
        $('h5#pizzaCheeseSize').text(pizza.pizzaCheeseSize);

      });
  });

})

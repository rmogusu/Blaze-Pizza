$(document).ready(function() {
  $("button#yes").click(function() {
    var location = prompt("Please enter your location.");
    var street = prompt("Please enter your street.");
    var houseno = prompt("Please enter your housenumber."); {
      alert("total charges for delivery is ksh.300 " + "Your order will be delivered to  " + " " + location + " " + street + " " + "houseNo " + houseno);
    }
  });
  $("button#no").click(function() {
    alert("Thanks for shopping with us");
  });

  $("form#select").submit(function(event) {
    event.preventDefault();
    var size = $("input[name='size']:checked", '#order').val();
    var topping = $("input[name='topping']:checked", '#order').val();
    var crust = $("input[name='crust']:checked", '#order').val();
    var quantity= $("input[name='quantity']:checked", '#order').val();

    var price = function (size, crust, topping, quantity, delivery) {
   return ((size + crust + toppings) * quantity) + delivery;
   alert(price);
 };
 });
});


const bacon ={
  name: "Bacon",
  price: 150
};
const pepporoni = {
  name: "Bell Pepper",
  price: 100
};
const sausage= {
  name: "sausage",
  price: 150
};

const extraCheese = {
  name: "extraCheese",
  price: 70
};
const black olive = {
  name: "black olive",
  price: 100
};
const mushrooms = {
  name: "Mushrooms",
  price: 100
};
const toppingsList = {
  name: "Toppings",
  items: [sausage, bacon, extraCheese,black olive , pepporoni, mushrooms]
}
const large = {
  name: "Large Size",
  price:1000
};
const medium = {
  name: "Medium Size",
  price: 800
};
const small = {
  name: "Small Size",
  price: 700
};
const sizeList = {
  name: "Sizes",
  items: [large, medium, small]
};
const thin = {
  name: "Thin Crust",
  price: 70
};
const thick = {
  name: "Thick Crust",
  price: 100
};
const deep = {
  name: "Deep Crust",
  price: 100
};
const glutten = {
  name: "Cheese Crust",
  price: 150
};
const stuffed = {
  name: "Stuffed Crust",
  price: 250
};
const cripsy = {
  name: "Stuffed Crust",
  price: 250
}
const crustsList = {
  name: "Crusts",
  items: [thin, thick, deep, cripsy,glutten, stuffed]
};
const large = {
 name: "Large Size",
 price: 550
};
const large = {
 name: "large Size",
 price: 1000
};
const medium = {
 name: "medium Size",
 price: 700
};
const small= {
 name: "small Size",
 price: 500
};
const sizeList = {
 name: "Sizes",
 items: [large, medium, small]
};
function contact(form){
        var name = document.forms["form1"]["yourname"].value;
            var email = document.forms["form1"]["youremail"].value;
            var message = document.forms["form1"]["message"].value;
            alert("Hello " + name + "," + "  Thank you for reaching out to us.feel free anytime. ");
          };

$(document).ready(function() {
  $("#size").submit(function(event) {
    event.preventDefault()
    var size = parseInt($("input[name='size']:checked").val());
    var sizeName = sizeList.items[size].name
    $("#checkouts").append("<li>" + sizeList.items[size].name + " " + sizeList.items[size].price + "</li>")
    total += (sizeList.items[size].price)
    alert("The total so far is: " + total)
  })

}

// document.addEventListener("DOMContentLoaded", function() {
    // Define an array to store snacks
    let snackShop = [];

    // Function to add a snack to the shop
    function addSnack (snackName, snackPrice, snackQuantity){
      let snack = {
        name: snackName,
        price: snackPrice,
        quantity: snackQuantity,
      }
      snackShop.push(snack);
      console.log(snackShop);
    }
  
    // Function to display snacks in the shop - already given
    function displaySnacks() {
      let snackList = document.getElementById("snack-list");
      snackList.innerHTML = ""; // Clears the previous snack list
  
      // Loop through each snack in the shop and create a list item for each
      for(let i = 0; i < snackShop.length; i++){
        let snack = snackShop[i];
        let snackItem = document.createElement("li");
        snackItem.textContent = `${snack.name}: $${snack.price} (${snack.quantity} left)`;
        snackList.appendChild(snackItem);
      }
    }
    // Add some sample snacks to the shop -example given
    addSnack("Chocolate Bar", 2.50, 10);
    addSnack("Skittles", 3.99, 10);
    addSnack("Sour Patch", 1.50, 5);
    addSnack("Snickers", 1.99, 7);

    // Display the snacks in the shop
    displaySnacks();


//   });
  
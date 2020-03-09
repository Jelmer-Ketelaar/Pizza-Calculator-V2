// // dit geeft aan welke pizza grootte de klant wilt hebben.
// let size = prompt("Welke soort grote pizza wilt u? U kunt kiezen tussen een kleine, medium of grote pizza");
// size = size.toLowerCase();
// if (size !== size) {
//     prompt("Deze pizza bestaat niet")
// }
//
// // dit geeft aan hoeveel pizza's de klant wilt.
// const aantal = prompt("Hoeveel " + size + " pizza's wilt u?");
//
//
// // dit geeft aan hoe duur de pizza's zijn.
// const klein = 8;
// const medium = 10;
// const groot = 12;
//
// // deze code geeft de berekening van het aantal small pizza's dat de klant wilt, kost.
// if (size === "kleine") {
//     document.write("kleine pizza" + ' ' + '&euro;' + klein * aantal);
// }
//
// else if (size === "klein") {
//     document.write("kleine pizza" + ' ' + '&euro;' + klein * aantal);
// }
//
// if (size === 'medium') {
//     document.write("medium pizza" + ' ' + '&euro;' + medium * aantal);
// }
//
// if (size === 'groot') {
//     document.write("grote pizza" + ' ' + '&euro;' + groot * aantal);
// }
//
// else if (size === "grote") {
//     document.write("grote pizza" + ' ' + '&euro;' + groot * aantal);
// }


function SaveItem() {

  var name = document.forms.ShoppingList.name.value;
  var data = document.forms.ShoppingList.data.value;
  localStorage.setItem(name, data);
  doShowAll();

}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem() {
  var name1 = document.forms.ShoppingList.name.value;
  var data1 = document.forms.ShoppingList.data.value;
  //check if name1 is already exists

  //check if key exists
  if (localStorage.getItem(name1) != null) {
    //update
    localStorage.setItem(name1, data1);
    document.forms.ShoppingList.data.value = localStorage.getItem(name1);
  }


  doShowAll();
}
//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem() {
  var name = document.forms.ShoppingList.name.value;
  document.forms.ShoppingList.data.value = localStorage.removeItem(name);
  doShowAll();
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
  localStorage.clear();
  doShowAll();
}
//--------------------------------------------------------------------------------------
// dynamically populate the table with shopping list items
//below step can be done via PHP and AJAX too. 
function doShowAll() {
  if (CheckBrowser()) {
    var key = "";
    var list = "<tr><th>Item</th><th>Value</th></tr>\n";
    var i = 0;
    //for more advance feature, you can set cap on max items in the cart
    for (i = 0; i <= localStorage.length - 1; i++) {
      key = localStorage.key(i);
      list += "<tr><td>" + key + "</td>\n<td>"
        + localStorage.getItem(key) + "</td></tr>\n";
    }
    //if no item exists in the cart
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
      list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    }
    //bind the data to html table
    //you can use jQuery too....
    document.getElementById('list').innerHTML = list;
  } else {
    alert('Cannot save shopping list as your browser does not support HTML 5');
  }
}

/*
 =====> Checking the browser support
 //this step may not be required as most of modern browsers do support HTML5
 */
//below function may be redundant
function CheckBrowser() {
  if ('localStorage' in window && window['localStorage'] !== null) {
    // we can use localStorage object to store data
    return true;
  } else {
    return false;
  }
}
//-------------------------------------------------
/*
You can extend this script by inserting data to database or adding payment processing API to shopping cart..
*/                    
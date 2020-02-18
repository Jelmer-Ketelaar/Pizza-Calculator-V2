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
//
//

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
const pizzas = [
    {name: 'Sinterklaas Pizza', price: 12.00, img: 'img/pizza-sinterklaas.jpeg', description: 'Dit is een pizza die lijkt op de mijter van sinterklaas'},
    {name: 'Vegetarische Pizza', price: 10.0, img: 'img/vega-pizza.jpg', description: 'Dit is een pizza die gemaakt is van vegetarische ingredi&euml;nten'},
    {name: 'Salami Pizza', price: 11.30, img: 'img/salami-pizza.jpeg', description: 'Dit is een pizza met een topping van salami'},
    {name: 'Pizza Margarita', price: 8.95, img: 'img/margherita.jpg', description: 'Dit is een pizza met kaas en tomatensaus'},
];



const pizza = document.getElementById(`pizza`);
pizza.classList.add("mystyle");

document.getElementsByTagName("img")[0].setAttribute("class", "pizza");
document.getElementById('pizza-list').innerHTML = '';

//Deleted the name because i want to place it somewhere else

for (let i = 0; i < pizzas.length; i++) {
    let li = document.createElement('LI');
    li.innerHTML = '<img src="' + pizzas[i].img + '" alt="pizza-img" id="pizzas" class="text" >' + pizzas[i].description;
    document.getElementById('pizza-list').appendChild(li);
}







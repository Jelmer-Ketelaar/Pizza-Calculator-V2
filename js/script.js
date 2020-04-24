const pizzas = [
    {name: 'Sinterklaas Pizza', price: 12.00, img: 'img/pizza-sinterklaas.jpeg', description: ''},
    {name: 'Vegetarische Pizza', price: 10.0, img: 'img/vega-pizza.jpg', description: ''},
    {name: 'Salami Pizza', price: 11.30, img: 'img/salami-pizza.jpeg', description: ''},
    {name: 'Pizza Margarita', price: 8.95, img: 'img/margherita.jpg', description: ''},
];

document.getElementById('pizza-list').innerHTML = '';

let li;
for (i = 0; i < pizzas.length; i++) {
    li = document.createElement('LI');
    li.innerHTML = '<img src="' + pizzas[i].img + '" alt="pizza-img">' + pizzas[i].name;
    document.getElementById('pizza-list').appendChild(li);
}





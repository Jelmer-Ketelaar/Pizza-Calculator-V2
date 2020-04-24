var pizzas = [
	{name: 'Sinterklaas Pizza', price:12.00, img: 'img/pizza-sinterklaas.jpeg', description: ''},
	{name: 'Vegetarische Pizza', price:10.0 , img: 'img/vega-pizza.jpg', description: ''},
	{name: 'Salami Pizza', price: 11.30, img: 'img/salami-pizza.jpeg', description: ''},
	{name: 'Pizza Margarita', price:8.95, img: 'img/margherita.jpg', description: ''},
];

document.getElementById('pizza-list').innerHTML = '';

for (i = 0; i < pizzas.length; i++) {
  var li = document.createElement('LI');
  li.innerHTML= pizzas[i].name;
  document.getElementById('pizza-list').appendChild(li);
}

for (var a = 0; a < pizzas.length; a ++) {
  var li = document.createElement('LI');
  li.innerHTML = '<img src="'+pizzas[i].img+'">'
  document.getElementById('img').appendChild(li);
}


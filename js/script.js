  
var pizzas = [
	{name: 'Sinterklaas Pizza', price:12.00, img: 'sinterklaas-pizza.png', description: ''},
	{name: 'Vegetarische Pizza', price:10.0 , img: 'marinara.png', description: ''},
	{name: 'Salami Pizza', price: 11.30, img: 'salami-pizza.jpeg', description: ''},
	{name: 'Pizza Margarita', price:8.95, img: 'margherita.jpg', description: ''},
	{name: 'Pizza Chicken Kebab', price: 15.00, img: 'chicken-kebab.png', description: ''}
];

document.getElementById('pizza-list').innerHTML = '';

for (i = 0; i < pizzas.length; i++) {
  var li = document.createElement('LI');
  li.innerHTML= pizzas[i].name;
  document.getElementById('pizza-list').appendChild(li);
}

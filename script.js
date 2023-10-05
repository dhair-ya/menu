let dishes = [
    {name: "Paratha", veg: true},
    {name: "Chicken Tikka", veg: false},
    {name: "Macroni", veg: true},
    {name: "Achaar", veg: true},
    {name: "Pepperoni Pizza", veg: false}
];

const dishesCollector = document.querySelector("#dishesCollector");
const vegdishesCollector = document.querySelector("#vegDishesCollector");

const divDishes = document.querySelector(".generateDishes");
const divVegDishes = document.querySelector(".generateVegDishes");
//Check if the two statements above is how you select a division

let unorderedList = document.createElement("ul");
let listItem = document.createElement("li");

dishesCollector.onclick = () => {
    divDishes.appendChild(unorderedList);
    let ulDishes = document.querySelector(".generateDishes ul");
    for (let i = 0; i < dishes.length; i++) {
        ulDishes.innerHTML += `<li>${dishes[i]['name']}</li>`;
    }
}

vegdishesCollector.onclick = function() {
    divVegDishes.appendChild(unorderedList);
    let ulVegDishes = document.querySelector(".generateVegDishes ul");
    for (let i = 0; i < dishes.filter(item => item.veg === true).length; i++) {
        ulVegDishes.innerHTML += `<li>${dishes.filter(item => item.veg === true)[i]['name']}</li>`;
    }
}
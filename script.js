'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  // const[starter, mainCourse] = restaurant.order(2,0);
  // console.log(starter, mainCourse);


  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },

  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3){}



}

//we use {} after we have to provide the variable names that match exactlly the property name  that we want to retrieve, the order does not matter so we dont need to skip elements


//const{name, openingHours, categories} = restaurant;

//console.log(name, openingHours, categories);
//here we create 3 variables called name , openingHours, categories




//deconstructing an array
//const arr =[1, 2,3];
//const [x, y, z]= arr;
//console.log(x,y,z);

//const [first, second] = restaurant.categories
//console.log(first, second)
//to destructuring object

// switching elements
//[main, secondary]= [secondary, main];
//console.log(main, secondary);

//const {name, openingHours, cathegories } = restaurant;
//console.log(name, openingHours, categories);

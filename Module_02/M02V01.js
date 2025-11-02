//map

const obj = {
  nextLevel: { courseId: "level2" },
  "Programmming Hero": { courseId: "level1" },
};
// console.log(obj);
// console.log(obj.nextLevel);  //dot notation
console.log(obj["Programmming Hero"]); //braket notation

const user = {
  name: "Ekhlasur Rahman",
  age: 24,
  profession: "Web Developer",
  address: {
    city: "Rajshahi",
    zipcode: 6220,
  },
};
console.log(user.address.city); //dot motation
console.log(user["address"]); //braket notation
console.log(user["address"]["city"]); //Nested Notation (Chained Access)
console.log(user.address["city"]); //Mixed Notation
console.log(user.address?.zipcode); //Optional Chaining
console.log("The User Dddres is" + user.address?.city); //Optional chaining in a string;

//Map (map size) in javascript

const map = new Map();
map.set("course1", "next level 1 web development");
map.set("course2", "next level 2 web development");
map.set("course3", "next level 3 web development");
map.set("course4", "next level 4 web development");
// console.log(map);
console.log("Total map size is" + map.size); //map.size is a method

console.log(map.delete("course4")); //delete an element from map

console.log(map); // show after delete all map elements

console.log(map.has("course4")); //check an elements is present in map or not (result will show false/True)
// console.log(map.clear) //clear all elements from map

//get
console.log("Get is a find data from map" + map.get("course2")); //get an elements from the map

console.log(map.keys()); //show all keys from map Map Iterator
console.log(map.values()); // Show all values from map Map Iterator data type

console.log([...map.keys()]); //show all keys from map in an array
console.log([...map.values()]); // Show all values from map is an array

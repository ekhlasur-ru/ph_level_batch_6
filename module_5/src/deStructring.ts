// Object Destructuring

const user = {
  id: 1,
  name: {
    fristName: "MD",
    middleName: "Ekhlasur",
    lastName: "Rahman",
  },
  gender: "male",
  age: "25",
  favouriteColors: "black",
};

// const { favouriteColors } = user;
// console.log(favouriteColors);  //black

const {
  favouriteColors,
  name: { middleName },
} = user;
// console.log(middleName);

// Array Destructuring

// const friends = ["rahim", "karim", "selim"];
// const myBestFriends = friends[2];
// console.log(myBestFriends);  //karim

const friends = ["rahim", "karim", "selim"];
const [, , myBestFriends] = friends;
console.log(myBestFriends); //selim

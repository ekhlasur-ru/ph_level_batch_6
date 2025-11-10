// spread Opareator [in array]
const friends = ["Ekhalsur", "Rahman", "Khokon"];

const schoolFriends = ["faisal", "nadim", "tauhid"];
const collegeFriends = ["kabir", "Shuvo", "selim"];

// friends.push(schoolFriends)   //error
friends.push(...schoolFriends); //correct
// console.log(friends);

// spread Opareator [in object]
const user = {
  name: "ekhlasur",
  age: 25,
  address: "rajshahi",
};
const otherUser = {
  hobby: "Writhing Code",
  profession: "Executive",
};

const userInfo = { ...user, ...otherUser };
console.log(userInfo);

// rest Oparator in function
const greatFriends = (friend1: string, friend2: string, friend3: string) => {
  console.log(`send Invitation to use function ${friend1}`);
  console.log(`send Invitation to use function ${friend2}`);
  console.log(`send Invitation to use function ${friend3}`);
};

greatFriends("ekhlasur", "rahman", "khokon");

//useit in loop
const inviteUser = (...user: string[]) => {
  user.forEach((user: string) => {
    console.log(`send Invitation to ${user}`);
  });
};

inviteUser("Rajshahi", "Dhaka", "Khulna");

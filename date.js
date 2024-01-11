const currentdate = new Date();
console.log(currentdate.getDate());
console.log(currentdate.getMonth());

const users = '{"name" : "santhosh" , "gender" : "male"}';
console.log(users);
const user = JSON.parse(users);
console.log(user["gender"]);
const animal = {
  name: "ssrikanth",
  gender: "female",
};
console.log(animal);
const final = JSON.stringify(animal);
console.log(final);

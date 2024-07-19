async function getName() {
  // return "Mike";
  // return Promise.resolve("Tom");
  throw Error("err...")
}

// console.log(getName()); // Promise { 'Mike' }

// getName().then(name => {
//   console.log(name); // "Tom"
// })

// reject 일때 
getName().catch((err) => {
  console.log(err);
} )
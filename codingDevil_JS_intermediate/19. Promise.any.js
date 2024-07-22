const resPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 2000);
})

const rejPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("fail...");
  }, 1000);
})

// fail...
Promise.race([resPromise, rejPromise]) 
  .then(() => console.log("성공"))
  .catch(e => console.log(e));

// 성공
Promise.any([resPromise, rejPromise]) 
  .then(() => console.log("성공"))
  .catch(e => console.log(e));


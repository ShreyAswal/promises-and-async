const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};
// console.log(cookies[1].name)
// Progression 1: create a function to get all the cookies
  // Progression 2: using setTimeout() -- use 1000 units for time parameter
function getCookies(cookie){
  // let aDiv=document.createElement('li')
  setTimeout(() => {
    console.log(cookie)
    cookie.forEach((c) =>{
      // aDiv.append(document.createElement('ul'))
      const list=document.createElement('li')
      list.innerText = c.name
      document.body.append(list)
      // document.write(c.name+" ")
    })
  },1000)
}
// getCookies(cookies)

//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookies(cookie){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(cookie.length == ""){
        reject("Invalid Cookie");
      }
      cookie.push(newCookie)
      resolve();
    })
  })
}


createCookies(cookies).then(() => {
  getCookies(cookies)
})
.catch((message) => {
  document.write(message)
})

    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
      
      // Progression 5: handling errors and adding new cookie to the list

// Progression 6: call function using `.then`
// createCookies(cookies).then((message) =>{
//   console.log(message)
//   document.write(cookies)
// })
// .catch((message) => {
//   console.log(message)
// })
// createCookies(cookies)
// p.then((message) =>{
//   console.log(message)
// })
// .catch

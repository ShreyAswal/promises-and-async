const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

   // Progression 2: using setTimeout() - use 1000 units for time parameter


//Progression 3: Create a function to creat cookies and create an object of Promise.


    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

      
      // Progression 5: handling errors and adding new cookie to the list


// Progression 7: creating a new async function

// calling the new async function

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
      cookies.push(cookie)
      resolve();
    })
  })
}

async function print(){
  try{
    await createCookies(newCookie)
    getCookies(cookies)
    
  }
  catch(message){
    document.write(message)
  }
}

print()



const promices1=new Promise(function(resolve,reject){
    // Do an async task
    // DB call cryptographic , network call
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()// ab ye conect huaa hai .then() se
        
    },1000)
});
//promices call back leta hai
// .then ka sidha connection resolve se hai
promices1.then(function(){
    console.log("promices is consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve();
        
    },2000)
}).then(function(){
    console.log("Promices 2 is consumed");
    
})

const threepromices=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 3 is completed");
        resolve({
            user:"Santosh Patel",
            email:"admin@gmail.com"
        })
        
    },1000)
})
threepromices.then(function(user){
    console.log(user);
    console.log(user.email);
})
const promicesfour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username :"santosh patel",password :"@123"
            })
        }
        else{
            reject(' ERROR !!Something Went Wrong!!')
        }
    },1000)
})
promicesfour.then( (user)=>{
console.log(user);
return user.username

}).then((username)=>{
console.log(username);

}).catch(function(error){
    console.log(error);
    
}).finally(()=>{console.log("Either promise resolve or rejected");
})



const promicesfive=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"sam",password:"@1234556"})
        }
        else{
            reject('Something went wrong')
        }

    },1000)
})


async function consumepromisefive(){
    try {
        const responce=await promicesfive
        console.log(responce);
        
        
    } catch (error) {
        console.log("error");
        
    }
    
}
consumepromisefive()

// there are two method 
// 1.then().then().catch().finally().
// 2.try().catch()



fetch('https://www.programiz.com/c-programming/online-compiler/')
.then(function(response) {
    return response.json();
    
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})
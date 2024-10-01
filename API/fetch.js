fetch('https://api.github.com/users/Santoshpatel112')
.then((Response)=>{
    return Response.json();
}).then((user)=>{
    console.log(user);
    console.log(user.followers);
    console.log(user.avatar_url);
}).catch((error)=>{
    console.log(error);
    
})
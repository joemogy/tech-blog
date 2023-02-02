
async function login(event){ 
    event.preventDefault();
    try{
   
    const userName= document.querySelector("#user-name").value;
    const password= document.querySelector("#password-login").value;

    const response=  await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            user_name: userName,
            password: password
        }),
        headers:{'Content-type': 'application/json'}
    });

    if(response.ok){
        document.location.replace('/');
    }else{
        alert(response.statusText);
    }
} catch(err){
    console.log(err);
}
   
}

const loginBtn= document.querySelector(".login-form");

loginBtn.addEventListener("submit",login);
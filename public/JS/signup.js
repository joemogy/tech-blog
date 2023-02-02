async function signUp(event){
    console.log('entering the sign up')
    event.preventDefault();
    try{
        
        const userNameSignup= document.querySelector("#username-signup").value;
        const paswordSignUp= document.querySelector("#password-signup").value;

        const response= await fetch('/api/user/',{
            method:'POST',
            body: JSON.stringify({
                user_name:userNameSignup,
                password:paswordSignUp
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response)

        if(response.ok){
            document.location.replace('/dashboard');
        }else{
            alert(response.statusText);
        }
    }catch(err){
        console.log(err);
    }
}

const signupBtn = document.querySelector(".signup-form");

signupBtn.addEventListener("submit", signUp);
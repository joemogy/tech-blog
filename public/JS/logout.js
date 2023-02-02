async function logout(event){
    event.preventDefault();
    try{
        const response= await fetch('/api/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok){
            document.location.replace('/login');
        }else{
            alert(response.statusText);
        }
    } catch(err){
        console.log(err);
    }
}

const logoutBtn= document.querySelector("#btn-logout");

logoutBtn.addEventListener("click",logout);
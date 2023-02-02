

async function addPost(event){ 
    event.preventDefault();
    try{
   
    const titleInputValue= document.querySelector('input[name="post-title"]').value;
    const postContentValue= document.querySelector('textarea[name="post-text"]').value;
    
    console.log(titleInputValue);
    console.log(postContentValue);

    const response= await fetch('/api/blog',{
        method: "POST",
        body: JSON.stringify({
            title: titleInputValue,
            content: postContentValue
        }),
        headers:{
            "Content-type":"application/json",
        },
    });

    if(response.ok){
        document.location.replace("/");
        console.log(response);
    }else{
        alert(response.statusText);
    }
} catch(err){
    console.log(err);
}

}

const postSubmitBtn= document.querySelector(".new-post-form");

postSubmitBtn.addEventListener('submit', addPost);
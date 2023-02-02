async function deletePost(event){
    try{
        event.prevenerDefault();

        const id = window.location.toString().split("/")[
            window.location.toString().split("/").length - 1
          ];

          const response = await fetch(`/api/posts/${id}`, {
            method: "DELETE"
          });

          if(response.ok){
            document.location.replace('/dashboard');
          }else{
            alert(response.statusText);
          }
    }catch(err){
        console.log(err);
    }
}

const delBtnPost= document.querySelector("#del-post-btn");

delBtnPost.addEventListener('click',delBtnPost);


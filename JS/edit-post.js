async function editPost(event){
    try{
        event.preventDefault();

        const titleEditBlog= document.querySelector("#blog-title-edit").value;
        const textAreaEdit= document.querySelector("#text-area-edit").value;
        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
          ];

        const response= await fetch(`/api/blog/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                title: titleEditBlog,
                content: textAreaEdit
            }),
            headers:{'Content-type':'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
          } else {
            alert(response.statusText);
          }
    }catch(err){
        console.log(err);
    }
}

const submitBtnEdit= document.querySelector(".edit-form");

submitBtnEdit.addEventListener("submit", editPost);
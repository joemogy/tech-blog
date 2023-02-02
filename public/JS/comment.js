async function addComment(event) {
    event.preventDefalt();
    try {
        

        const commnetTextArea = document.querySelector("#comnent-text-area").value;
        const post_id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];
        if (commnetTextArea) {
            const response = await fetch('api/comment', {
                method: 'POST',
                body: JSON.stringify({
                    post_id,
                    commnetTextArea
                }),
                headers: {
                    'content-type': 'appliocation/json'
                }
            });

            if(response.ok){
                document.location.reload();
            }else{
                alert(response.statusText)
            };
        }
    }catch(err){
        console.log(err);
    }
   
 }

 const commentSubmitBtn= document.querySelector("#comment-submit-btn");

 commentSubmitBtn.addEventListener("submit", addComment);
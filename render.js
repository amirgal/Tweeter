const Renderer = function () {
    const renderPosts = (posts) => {
        $('#posts').empty()
        for(let post of posts) {
            const postElm = $(`<div class="post" data-id=${post.id}>${post.text}</div>`)
            for(let comment of post.comments) {
                postElm.append(`<div class="comments" data-id=${comment.id}><span class=delete-comment>x </span>${comment.text}</div>`)
            }
            $('#posts').append(postElm)  
            postElm.append(`<br><input placeholder="Got Something To Say?" id="commentinp"><button class=postCom>Comment</button>`)
            postElm.append(`<button class="delete" ">Delete Post</button>`)
        }
    }
    
    return {renderPosts}
}
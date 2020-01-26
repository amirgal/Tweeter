const Renderer = function () {
    const renderPosts = (posts) => {
        $('#posts').empty()
        for(let post of posts) {
            const postElm = $(`<div class="post post-text" data-id=${post.id}>${post.text}</div>`)
            for(let comment of post.comments) {
                postElm.append(`<div class="comments" data-id=${comment.id}><span class=delete-comment>x </span>${comment.text}</div>`)
            }
            $('#posts').append(postElm)  
            postElm.append(`<input placeholder="Got Something To Say?" id="input"><button>Comment</button>`)
            postElm.append(`<button class="delete" style="display:block">Delete Post</button>`)
        }
    }

    return {renderPosts}
}
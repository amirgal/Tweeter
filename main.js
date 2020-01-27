const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const twitBtn = $('#post')
twitBtn.on('click', function() {                                //Adding a post
    const twitInp = $('#input').val()
    tweeter.addPost(twitInp)
    renderer.renderPosts(tweeter.getPosts())
})


$('#posts').on('click','.delete',function() {                  //Deleting a post
    const postID = $(this).closest('.post').data().id
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click','.postCom',function(){
    const comInp = $(this).siblings('#commentinp').val()
    const postID = $(this).closest('.post').data().id
    tweeter.addComment(comInp,postID)
    renderer.renderPosts(tweeter.getPosts())
})
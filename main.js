const tweeter = Tweeter()
const renderer = Renderer()

// renderer.renderPosts(tweeter.getPosts())
localStorage.posts = localStorage.posts ? localStorage.posts : JSON.stringify(tweeter.getPosts())
renderer.renderPosts(JSON.parse(localStorage.posts))

const twitBtn = $('#post')
twitBtn.on('click', function() {                                
    const twitInp = $('#input').val()
    tweeter.addPost(twitInp)
    $('#input').val("")
    localStorage.posts = JSON.stringify(tweeter.getPosts())    //Added code to implement local storage
    // renderer.renderPosts(tweeter.getPosts())
    renderer.renderPosts(JSON.parse(localStorage.posts))
})


$('#posts').on('click','.delete',function() {                  
    const postID = $(this).closest('.post').data().id
    tweeter.removePost(postID)
    localStorage.posts = JSON.stringify(tweeter.getPosts())    //Added code to implement local storage
    // renderer.renderPosts(tweeter.getPosts())
    renderer.renderPosts(JSON.parse(localStorage.posts))
})

$('#posts').on('click','.postCom',function(){                   
    const comInp = $(this).siblings('#commentinp').val()
    const postID = $(this).closest('.post').data().id
    tweeter.addComment(comInp,postID)
    localStorage.posts = JSON.stringify(tweeter.getPosts())    //Added code to implement local storage
    // renderer.renderPosts(tweeter.getPosts())
    renderer.renderPosts(JSON.parse(localStorage.posts))
})

$('#posts').on('click','.delete-comment', function() {          
    const postID = $(this).closest('.post').data().id
    const comID = $(this).closest('.comments').data().id
    tweeter.removeComment(postID,comID)
    localStorage.posts = JSON.stringify(tweeter.getPosts())    //Added code to implement local storage
    // renderer.renderPosts(tweeter.getPosts())
    renderer.renderPosts(JSON.parse(localStorage.posts))
})
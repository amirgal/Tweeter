const Tweeter = () => {
    let _postidCounter = 2
    let _commentidCounter = 6

    const _posts = JSON.parse(localStorage.posts || "[]") // Added to implement 
    // const _posts = [
    //     {
    //         text: "First post!",
    //         id: "p1",
    //         comments: [
    //             { id: "c1", text: "First comment on first post!" },
    //             { id: "c2", text: "Second comment on first post!!" },
    //             { id: "c3", text: "Third comment on first post!!!" }
    //         ]
    //     },
    //     {
    //         text: "Aw man, I wanted to be first",
    //         id: "p2",
    //         comments: [
    //             { id: "c4", text: "Don't wory second poster, you'll be first one day." },
    //             { id: "c5", text: "Yeah, believe in yourself!" },
    //             { id: "c6", text: "Haha second place what a joke." }
    //         ]
    //     }
    // ]

    const getPosts = () => {return _posts}
    
    const addPost = (text) => {
        _postidCounter++
        const newPost = {
            text,                   //like text: text
            id: "p"+_postidCounter,
            comments: []
        }
        _posts.unshift(newPost)
    }

    const removePost = (postID) => {
       for (let i in _posts) {
           if (_posts[i].id === postID) {
               _posts.splice(i,1)
               return
           }
       }
    }

    const addComment = (text,postID) => {
        for (let i in _posts) {
            if (_posts[i].id === postID) {
                _commentidCounter++
                _posts[i].comments.push({
                    id:'c'+_commentidCounter,
                    text
                })
            }
        }
    }

    const removeComment = (postID,commentID) => {
        for (let post of _posts) {
            if(post.id === postID){
                const commentsArray = post.comments
                for(let i in commentsArray) {
                    if (commentsArray[i].id === commentID){
                        commentsArray.splice(i,1)
                        return
                    }
                }
            }
        }
    }

    return {getPosts, addPost, removePost, addComment ,removeComment}
}

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// // console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// // console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// // console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// // //This should be added to the second post's comments array:
// // //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// // //This comment should be removed:
// // //{id: "c6", text: "Haha second place what a joke."}

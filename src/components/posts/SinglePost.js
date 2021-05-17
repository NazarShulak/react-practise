import {useEffect, useState} from "react";

export default function SinglePost({postId}) {
    let [post, setPost] = useState({});
    let {id, userId, title, body} = post;

    useEffect(() => {
        // if (postId > 0 ) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => setPost({...value}))
        // }
    }, [postId])
    return (
        <div>
            ID: {id}<br/> UserID: {userId}<h3>Title:</h3> {title}<h3>Body:</h3> {body}
        </div>
    )
}
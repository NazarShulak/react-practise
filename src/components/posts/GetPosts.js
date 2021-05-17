import {useState} from "react";
import SinglePost from "./SinglePost";

export default function GetPosts() {
    let [postId, setPostId] = useState('');


    function submit(e) {
        e.preventDefault();
    }

    function onPostIdChange(e) {
        let value = e.target.value;
        if (value >= 0 && value <= 100) {
            setPostId(value);
        }
    }


    return (
        <div>
            <form onSubmit={submit}>
                <input type={'text'} name={'post-id'} placeholder={'number from 1 to 100'} value={postId}
                       onChange={onPostIdChange}/>
                <input type={'submit'}/>
            </form>
            <SinglePost postId={postId}/>


        </div>
    )
}
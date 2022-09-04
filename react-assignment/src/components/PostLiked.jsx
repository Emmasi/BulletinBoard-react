import { useState } from 'react';
import Message from './Message'


const PostLiked = ()=>{
    const [LikeBtn,setLikeBtn]=useState(false)
    const likeOnClick =()=>setLikeBtn(true) 
    

    return(
        <div>
        {!LikeBtn ? <button onClick={likeOnClick}> 
        ❤️ GILLA</button> :null}
        {LikeBtn && <Message />}
        </div>
    )
}

export default PostLiked
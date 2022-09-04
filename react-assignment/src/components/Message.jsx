import { useState } from 'react'

const Message =()=>{
    const [closeBtn,setcloseBtn] = useState(true)
    const closeClick =()=>{setcloseBtn(false)}
    return(
        <div>
            {closeBtn ?<div className="messageContainer"><h3>💕You have liked this post!</h3>
            <button className="closeBtn" onClick={closeClick}>Close</button></div> : null}
        </div>
    )
}
export default Message
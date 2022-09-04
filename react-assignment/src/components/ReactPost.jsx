import PostLiked from './PostLiked'


const ReactPost =(props)=>{

    return(
        <div className="postcard">
        
        <h2>Fråga:</h2><h3>{props.question}</h3>
        <h2>Svar:</h2><h3>{props.answer}</h3>
        <PostLiked />
        </div>
    )

}

export default ReactPost
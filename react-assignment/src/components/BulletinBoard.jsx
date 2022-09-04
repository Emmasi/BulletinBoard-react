import ReactPost from './ReactPost';

const BulletinBoard = ({Posts}) =>{
    return(
    <div>
    {Posts.map((post)=> <ReactPost question={post.question} answer={post.answer}key={post.id}/>
    )}
    </div>
    )
};
export default BulletinBoard
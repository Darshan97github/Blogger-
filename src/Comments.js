import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Comments = (props) =>{
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [body, setBody] = useState([])
    const [name, setName] = useState('')
    const {id} = props.match.params
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then((response)=>{
                        setPost(response.data)
                        setBody(response.data)
                    })
                    
    }, [id])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const res = response.data
            //console.log(response.data)
            setComments(res)
        })
        
    }, [id])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
                    const res = response.data
                    console.log(response.data)
                    setName(res)
                })
                
    }, [id])

    return (
        <div>
            {name && <h1>USER NAME:{name.name}</h1>}
            <h1>TITLE:{post.title}</h1>

            <h3>BODY:</h3>
            {body && <h3>{body.body}</h3>} 
            <hr/>

            <h3>COMMENTS</h3>
            <ul>
            {
                comments.map((comment,i)=>{
                    return (
                        <li key={i}>{comment.body}</li>
                    )
                })
            }
            </ul>
            <hr/>
            {name && <Link to={`/users/${id}`}>More posts of author:{name.name}</Link>}
        </div>
    )
}
export default Comments
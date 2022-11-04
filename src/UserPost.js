import React, {useState, useEffect}  from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const UserPost =(props) =>{
    const [posts, setPosts] = useState([])
    const [name, setName] = useState('')
    const {id} = props.match.params
   

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
                    const res = response.data
                    console.log(response.data)
                    setName(res)
                })
            
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const res = response.data
                //console.log(response.data)
                setPosts(res)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }, [id])

    return (
        <div>
            <h1> USER NAME:{name.name}</h1>
            <h2>POSTS WRITTEN BY USER</h2>

            <ul>
                {
                    posts.map((post)=>{
                        return (
                            <li key={post.id}><Link to={`/posts/${post.id}`} >{post.title}</Link></li>
                        )
                    })
                }
            </ul>
            <Link to='/users' >Back</Link>
        </div>
    )
}
export default UserPost
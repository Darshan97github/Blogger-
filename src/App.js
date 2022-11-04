import React from 'react'
import { Link, Route } from 'react-router-dom'
import Users from './Users'
import UserPost from './UserPost'
import Posts from './Posts'
import Comments from './Comments'

const App = (props) =>{

  return (
    <div>
        <Link to="/" exact>Home</Link>|<Link to="/Users">Users</Link>|<Link to="/Posts">Posts</Link>

        <Route path='/users' component={Users} exact={true}/>
        <Route path="/users/:id" component={UserPost} />
        <Route path='/posts' component={Posts} exact={true}/>
        <Route path='/posts/:id' component={Comments} />
    </div>
  )
}
export default App
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const GetRequest = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
             .then((res) => {
                setPosts(res.data);
             })
             .catch((err) => {
                console.error(err);
             })
    },[])

    return (
        <>
            <h1>List of posts</h1>
            <ol>
                {posts.map(post => {
                    <li key={post.id}>{post.title}</li>
                    console.log(post.title);
                })}
            </ol>
        </>
    )
}

export default GetRequest
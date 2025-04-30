import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import PostForm from './Components/PostForm'
import PostList from './Components/PostList'
import { Post } from './types'

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    const res = await fetch('http://127.0.0.1:5001/api/posts')
    const data = await res.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="bg-dark text-white min-vh-100">
      <Container className="py-4" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-4">📝 Post Something</h1>
        <PostForm onPostCreated={fetchPosts} />
        <hr className="border-secondary my-4" />
        <PostList posts={posts} />
      </Container>
    </div>
  )
}

export default App
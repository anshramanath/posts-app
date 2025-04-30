import { Card } from 'react-bootstrap'
import { Post } from '../types'

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="d-flex flex-column gap-4">
      {posts.map(post => (
        <Card key={post._id} bg="dark" text="white" className="border-secondary">
          <Card.Body>

            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>

            {post.imageUrl && (
              <Card.Img variant="bottom" src={post.imageUrl} className="rounded mt-3" />
            )}
            
            <Card.Text className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
              Posted at: {new Date(post.createdAt).toLocaleString()}
            </Card.Text>

          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
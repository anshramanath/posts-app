import { useState } from 'react'
import { Form, Button, Image } from 'react-bootstrap'

type Props = {
  onPostCreated: () => void
}

export default function PostForm({ onPostCreated }: Props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    if (image) formData.append("image", image)

    await fetch("http://127.0.0.1:5001/api/posts", {
      method: "POST",
      body: formData,
    })

    setTitle("")
    setDescription("")
    setImage(null)
    setPreview(null)
    onPostCreated()
  }

  return (
    <Form onSubmit={handleSubmit} className="bg-secondary p-4 rounded">

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="What's on your mind?"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="file" onChange={handleImageChange} />
      </Form.Group>

      {preview && (
        <Image src={preview} fluid rounded className="mb-3" />
      )}

      <Button variant="primary" type="submit" className="w-100">
        Post
      </Button>
      
    </Form>
  )
}
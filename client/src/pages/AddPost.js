import React, {useState} from 'react'
import PostForm from '../components/PostForm'
import API from '../helpers/API'

export default function AddPost() {
    const [formData, setFormData] = useState({ title: "", content: ""})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
        console.log(formData)
    }

    const savePost = async (e) => {
        e.preventDefault()
      try {
      const { title, body } = formData;
      const config = { headers: { "Content-Type": "application/json" } };
      const bodys = { title, body };
        const res = await API.post(`/posts`, bodys, config)
        console.log(res)
      } catch (e) {
        console.log(e);
      }
    };

    return (
        <div className="container">
          <PostForm post handleChange={handleChange} handleSubmit={savePost} />
        </div>
    )
}

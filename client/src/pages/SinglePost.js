import React, { useState } from 'react'
import API from '../helpers/API'
import { useFetch } from '../hooks'
import {notify} from '../helpers/Notify'
import { useAuthAccess } from '../contexts/AuthContext'

export default function SinglePost(props) {
const { id } = props?.match.params
  const [doCheck, setDoCheck] = useState(false)
  const [btnName, setBtnName] = useState("Enable editing")
  const { response, isLoading } = useFetch(props.match.params.id)
    const {auth} = useAuthAccess()

  const enableUpdate = () => {
    setDoCheck(!doCheck)
    doCheck ? setBtnName("Enable editing") : setBtnName("Disable editing")
  }
  React.useEffect(() => {
    document.getElementById('editor').contentEditable = doCheck;
    document.getElementById('editor2').contentEditable = doCheck;
  }, [doCheck])


  const updatePost = async (e) => {
    e.preventDefault()
    try {
      let title = document.getElementById('editor').innerHTML
      let body = document.getElementById('editor2').innerHTML

      const config = { headers: { "Content-Type": "application/json" } };
      const bodys = { title, body };
      const res = await API.patch(`/posts/${id}`, bodys, config)
      notify({error: res.data.error, msg: res.data.message})
      console.log(res)
    } catch (e) {
      console.log(e);
      notify({error: "Server error" + e})
    }
  };
  return (
    <div className="container pt-2">
      <div className="row pt-2">
       {auth && <div className="col-md-12 d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={enableUpdate}>{btnName}</button>
         {doCheck && <button className="btn btn-primary" onClick={updatePost}>Save changes</button>}
        </div>
}
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="mb-5" id="editor" dangerouslySetInnerHTML={{ __html: response?.data.data.title }} />
            <div id="editor2" dangerouslySetInnerHTML={{ __html: response?.data.data.body }} />
            <hr />
            <p>{response?.data.data.author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './View.css'

const View = () => {
  const [user, setUser] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getSingleUser(id)
    }
  }, [id])

  // Get a User by ID || Single User
  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`)

    if (response.status === 200) {
      setUser({ ...response.data[0] })
    }
  }
  return (
    <div style={{ marginTop: '100px' }}>
      <div className='card'>
        <div className='card-header'>
          <h4>User Contact Details</h4>
        </div>
        <div className='container'>
          <strong>ID: </strong>
          <span>{id} </span>
          <br />
          <strong>Name: </strong>
          <span>{user && user.name} </span>
          <br />
          <strong>Email: </strong>
          <span>{user && user.email} </span>
          <br />
          <strong>Contact: </strong>
          <span>{user && user.contact} </span>
          <br />
          <Link to='/'>
            <button className='btn btn-edit'>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View

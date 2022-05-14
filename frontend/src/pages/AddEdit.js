import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './AddEdit.css'
import { toast } from 'react-toastify'

// Initial Values
const initialState = {
  name: '',
  email: '',
  contact: '',
}

const AddEdit = () => {
  const [state, setState] = useState(initialState)

  const { name, email, contact } = state

  const history = useNavigate()

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
      setState({ ...response.data[0] })
    }
  }

  // Add User
  const addUser = async (data) => {
    const response = await axios.post('http://localhost:5000/user', data)

    if (response.status === 200) {
      toast.success(response.data)
    }
  }

  // Update User
  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data)

    if (response.status === 200) {
      toast.success(response.data)
    }
  }

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if ((!name, !email || !contact)) {
      toast.error('Please fill all the fields')
    } else {
      if (!id) {
        addUser(state)
      } else {
        updateUser(state, id)
      }
      setTimeout(() => history('/'), 500)
    }
  }

  // Handle Input Value Change
  const handleInputChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          placeholder='Enter Name ....'
          onChange={handleInputChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          placeholder='Enter Email Address ....'
          onChange={handleInputChange}
        />
        <label htmlFor='email'>Contact Number</label>
        <input
          type='number'
          name='contact'
          id='contact'
          value={contact}
          placeholder='Enter Contact ....'
          onChange={handleInputChange}
        />
        <input type='submit' value={id ? 'Update' : 'Add'} />
      </form>
    </div>
  )
}

export default AddEdit

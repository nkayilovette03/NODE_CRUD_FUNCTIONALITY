import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users')

    if (response.status === 200) {
      setData(response.data)
    }
  }

  const onDeleteUser = async (id) => {
    if (window.confirm('Are you sure you wanted to delete that user record?')) {
      const response = await axios.delete(`http://localhost:5000/user/${id}`)

      if (response.status === 200) {
        toast.success(response.data)
        getUsers()
      }
    }
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Email.</th>
            <th style={{ textAlign: 'center' }}>Contact</th>
            <th style={{ textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <Link to={`/update/${user.id}`}>
                    <button className='btn btn-edit'>Edit</button>
                  </Link>

                  <button
                    className='btn btn-delete'
                    onClick={() => onDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${user.id}`}>
                    <button className='btn btn-view'>View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home

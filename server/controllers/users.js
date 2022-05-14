import { v4 as uuid } from 'uuid'

let users = []

// Get All users
export const getUsers = (req, res) => {
  res.send(users)
}

// Create a User
export const createUser = (req, res) => {
  const user = req.body

  users.push({ ...user, id: uuid() })
  res.send('User Added Successfully')
}

// Get user by ID
export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id)

  res.send(singleUser)
}

// Delete User ID
export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id)

  res.send('User Deleted Successfully')
}

// Update User By ID
export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id)

  user.name = req.body.name
  user.email = req.body.email
  user.contact = req.body.contact

  res.send('User Updated Successfully')
}

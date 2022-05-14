import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home')

  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('Home')
    } else if (location.pathname === '/add') {
      setActiveTab('AddUser')
    } else if (location.pathname === '/about') {
      setActiveTab('Search')
    } else if (location.pathname === '/search') {
      setActiveTab('Search')
    }
  }, [location])
  return (
    <div className='header'>
      <span className='logo'>User</span>
      <span className='logo'>Management </span>
      <span className='logo'>System</span>
      <div className='header-right'>
        <Link to='/'>
          <p
            className={activeTab === 'Home' ? 'active' : ''}
            onClick={() => setActiveTab('Home')}
          >
            Home
          </p>
        </Link>
        <Link to='/add'>
          <p
            className={activeTab === 'AddUser' ? 'active' : ''}
            onClick={() => setActiveTab('AddUser')}
          >
            Add User
          </p>
        </Link>
        <Link to='/about'>
          <p
            className={activeTab === 'About' ? 'active' : ''}
            onClick={() => setActiveTab('About')}
          >
            About
          </p>
        </Link>
        <Link to='/search'>
          <p
            className={activeTab === 'Search' ? 'active' : ''}
            onClick={() => setActiveTab('Search')}
          >
            Search
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

const Search = () => {
  return (
    <div>
      <h1>Search</h1>
      <form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0px 5px',
          }}
        >
          <input
            type='search'
            placeholder='Search User'
            name='search'
            value=''
          />
          <Link to='/'>
            <button className='btn btn-search'>Search</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Search

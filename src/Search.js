import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
const [keyword,setKeyword] =useState('');
const searchHandler =(e) => {
    e.preventDefault()
    if(keyword){
    }else {
    }
}

  return (
    <div>
       <form onSubmit={searchHandler}>
       <div className="header__search">
        <input className="header__searchInput" type="text" onChange={(e) => setKeyword(e.target.value)}  />
       <button><SearchIcon/></button>
      </div>
      
        </form> 
    </div>
  )
}

export default Search
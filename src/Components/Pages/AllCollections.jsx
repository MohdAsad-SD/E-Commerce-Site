import React from 'react'
import Search from '../Search/Search'

const AllCollections = ({search,setsearch}) => {
  return (
    <div>
        {search && <Search search={search} setsearch={setsearch}/>}
      
    </div>
  )
}

export default AllCollections

import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const {querry, setQuerry, isError} = useGlobalContext();
  
  return (
    <section className="search-section">
    <h2>Search Your Favourite Movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text"
        placeholder="Search Here"
        value={querry}
        onChange={(e)=>setQuerry(e.target.value)}/>
      </div>
    </form>
    <div className="card-error">
      <p>{isError.show && isError.msg}</p>
    </div>
  </section>
  )
}

export default Search
import './search.css'
import { useGlobleContext } from '../context/Context'


export default function Search() {
    const {query, seearchPost} = useGlobleContext();
  return (
    <div className='Searchcontainer'>
      <h1>Praveen Tech Website </h1>
      <form action="">
        <div className="Searchinput">
          <input type="text" placeholder='Search here' value={query} onChange={(e)=> seearchPost(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}

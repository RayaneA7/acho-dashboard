import { useEffect } from "react"

const Search = ({search,setSearch}) => {
 
  return (
    <div className="md:flex md:items-center flex-columns ml-4 md:ml-0">
      <div className="flex items-center bg-[#E8ECF4] border-md px-3 py-1 rounded-md">
        <svg
          className="w-4 h-4 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>

        <input 
          onChange={(e)=>setSearch({...search,value:e.target.value})}
          type='seach'
          className='bg-[#E8ECF4] ml-2 '
          placeholder='rechercher...'
        />
      </div>
      <div className="flex items-center bg-[#E8ECF4] border-md px-3 py-1 rounded-md md:ml-2 w-fit md:w-full mt-2 md:mt-0 ">
        <select  onChange={(e)=>setSearch({...search,feature:e.target.value})} name='cars' id='cars' className="bg-[#E8ECF4]">
          <option value='titre'>titre</option>
          <option value='date'>date</option>
          <option value='user'>createur</option>
        </select>
      </div>
    </div>
  );
};

export default Search;

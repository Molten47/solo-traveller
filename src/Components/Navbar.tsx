import {useState} from 'react'
import MaterialInput from '../Hooks/MaterialInput';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');


  return (
   <div className='w-full bg-color flex flex-row h-[12vh]'>
      <nav className="w-full flex flex-row justify-between items-center px-4">
        <div className="items-center">
          <h3 className="flex-1">Gidi travels</h3>
        </div>
        <div className="flex flex-row gap-4 items-center shadow-lg shadow-gray-400 rounded-full w-1/2 h-3/4 p-10">
        <div className='flex flex-row justify-between'>
               <MaterialInput
            label="Location"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Where to?"
          />
           <MaterialInput
           
            label="Dates"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Where to?"
          />
           <MaterialInput
            label="Guests"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Where to?"
          />
        </div>
        <div>
          <button className='primary-buttons'>

          </button>
        </div>
     
        </div>
        <div className="flex flex-row items-center gap-4">
          <span className="size-10 rounded-full bg-radial from-pink-400 to-fuchsia-700"></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
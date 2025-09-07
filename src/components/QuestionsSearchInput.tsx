import { useState } from "react"
import Badge from "./UI/Badge"

const QuestionsSearchInput = ({ setFilter }: { setFilter: Function }) => {
   const [search, setSearch] = useState<string>('')

   const applyFilterHandler = () => {
      setFilter(search.trim().toLowerCase())
   }

   return (
      <div className="relative">
         <input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value) }} className="border-0 rounded-3xl bg-indigo-400 py-3 px-4 text-sm text-white w-full focus:outline-0 " type="text" placeholder="Питання або номер" name="text" />
         <div className="absolute top-1 right-1">
            <Badge pointer={true} clickHandler={applyFilterHandler}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 16.5C14.0376 16.5 16.5 14.0376 16.5 11C16.5 7.96243 14.0376 5.5 11 5.5C7.96243 5.5 5.5 7.96243 5.5 11C5.5 14.0376 7.96243 16.5 11 16.5Z" stroke="white" />
                  <path d="M15 15L19 19" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </Badge>
         </div>
      </div>
   )
}

export default QuestionsSearchInput
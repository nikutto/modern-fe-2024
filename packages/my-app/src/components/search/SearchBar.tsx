export const SearchBar = () => (
  <div className="flex">
    <div className="flex flex-col items-center">
      <input 
        className="bg-white w-40 items-center rounded-l"
        type="text" 
      />
    </div>
    <div>
      <span className="material-icons bg-white pointer-events-none rounded-r">search</span> 
    </div>
  </div> 
)

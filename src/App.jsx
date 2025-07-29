
  function App() {

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sky Blue Color Palette Buttons</h1>
        <div className="flex flex-wrap gap-2">
          {/* Sky-50 Button */}
          <button
            className="w-20 h-20 bg-sky-50 flex items-center justify-center text-xs font-medium border border-sky-100
                      hover:bg-sky-100 hover:border-sky-200 active:bg-sky-200 active:border-sky-300
                      focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-75
                      transition-all duration-200 ease-in-out cursor-pointer"
            onClick={() => alert('Sky-50 button clicked!')} // Example: Add an onClick handler
          >
            sky-50
          </button>
        </div>
      </div>
        
    )
  }

  export default App

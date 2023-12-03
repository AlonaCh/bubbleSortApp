import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState("")

  function bubbleSortHandler(event) {
    setInputValue(event.target.value);
  }

  function bubble() {


  }

  return (
    <>
      <div>
        <div className="inputValue">
          <h1>Bubble Sort App</h1>
          <input id="search"
            type="text"
            placeholder="Enter word or number" onClick={bubbleSortHandler} />
          <p>{bubble()}</p>
        </div>
      </div>
    </>
  )
}

export default App

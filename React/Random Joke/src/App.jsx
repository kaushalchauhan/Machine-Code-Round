import { useEffect, useState } from 'react'
import Loader from './Loader'
function App() {
  const [joke, setJoke] = useState("");
  const [loader, setloader] = useState(false)

  const generateJoke = () => {
    setloader(true)
    fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json()).then((res) => setJoke(res.value)).finally(() => setloader(false))
  }
  const handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(joke)
        .then(() => {
          alert('Joke copied to clipboard!');
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
    } else {
      console.error('Clipboard API is not supported in this browser.');
    }
  };
  useEffect(() => {
    generateJoke();
  }, [])

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center px-3 bg-gray-400">
        <div className=" relative flex flex-col mt-6 text-gray-800 bg-gray-100 shadow-md bg-clip-border rounded-xl w-96">
          <div className="p-6">
            <h4 className="block mb-2 font-sans text-2xl font-semibold leading-snug text-gray-700">
              Random Joke
            </h4>
            <p className="block font-sans text-base font-light">
              {joke}
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-between items-center">
            <button onClick={generateJoke} className="bg-gray-800 px-3 py-2 rounded-md text-white align-middle select-none font-sans font-bold text-center uppercase hover:translate-x-1 duration-200 hover:text-gray-200">{loader ? <Loader /> : "Generate Joke"}</button>
            <button
              onClick={handleCopyClick}
            >
              <img className='hover:scale-100 scale-90 cursor-pointer duration-200' width="24" height="24" src="https://img.icons8.com/material-rounded/24/copy.png" alt="copy" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

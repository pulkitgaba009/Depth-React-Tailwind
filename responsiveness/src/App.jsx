import NavBar from "./NavBar"

function App() {

  return (
    <div className="flex flex-col pg:flex-row justify-center items-center w-screen h-screen gap-10">
        {/* <h1 className="text-4xl xl:text-9xl font-bold lg:bg-blue-500">responsiveness</h1> */}

        {/* <div className="h-40 w-40 rounded-2xl bg-neutral-200"></div>
        <div className="h-40 w-40 rounded-2xl bg-red-200"></div>
        <div className="h-40 w-40 rounded-2xl bg-cyan-200"></div> */}
       <NavBar></NavBar>
    </div>
  )
}

export default App

import { useState } from "react"

function App() {
  const [color,setColor] = useState("black");

  return (
    <div className="w-screen h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white px-3 py-2 rounded-3xl w-full justify-evenly">
          <button className="outline-none px-4 bg-red-600 shadow-lg rounded-full" onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 bg-amber-300 shadow-lg rounded-full" onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="outline-none px-4 bg-blue-600 shadow-lg rounded-full" onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-4 bg-green-600 shadow-lg rounded-full" onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-4 bg-pink-600 shadow-lg rounded-full" onClick={()=>setColor("pink")}>Pink</button>
          <button className="outline-none px-4 bg-yellow-900 shadow-lg rounded-full" onClick={()=>setColor("brown")}>Brown</button>
          <button className="outline-none px-4 bg-cyan-400 shadow-lg rounded-full" onClick={()=>setColor("cyan")}>Cyan</button>
        
        </div>
      </div>
    </div>
  )
}

export default App

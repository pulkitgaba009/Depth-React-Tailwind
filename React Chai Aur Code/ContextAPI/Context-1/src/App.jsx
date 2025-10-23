import UserContextProvider from "./context/userContextProvider"

function App() {

  return (
    <>
    <UserContextProvider>
      <h1>React with Chai</h1>
    </UserContextProvider>
    </>
  )
}

export default App

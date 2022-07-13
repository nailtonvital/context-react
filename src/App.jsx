import React from "react"
import { useAuth } from './providers/auth'
import Login from './components/login'

function App() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="App">
      <h1>{user.name}</h1>
      <Login />
    </div>
  )
}

export default App

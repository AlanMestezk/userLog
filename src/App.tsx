import './App.css'
import { Login } from './components/login'
import { UserProvider } from './context/user'

function App() {

  return (
    <UserProvider>
      <h1>Faça o cadastro</h1>
      <Login/>
    </UserProvider>
  )
}

export default App

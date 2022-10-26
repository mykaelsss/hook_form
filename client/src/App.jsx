import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Form from  './components/form';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default App

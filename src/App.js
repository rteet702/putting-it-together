import PersonCard from './components/PersonCard'
import './App.css'

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Robert' lastName='Teets' age={ 25 } hairColor='Brown' />
      <PersonCard firstName='Jane' lastName='Doe' age={ 45 } hairColor='Black' />
      <PersonCard firstName='John' lastName='Smith' age={ 88 } hairColor='Brown' />
      <PersonCard firstName='Millard' lastName='Fillmore' age={ 50 } hairColor='Blonde' />
    </div>
  )
}

export default App;

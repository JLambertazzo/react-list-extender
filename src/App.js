import ListExtender from './ListExtender'
import './App.css'

function App () {
  return (
    <div className='App'>
      <ListExtender listContents={[1, 2, 3]} type='date' />
    </div>
  )
}

export default App

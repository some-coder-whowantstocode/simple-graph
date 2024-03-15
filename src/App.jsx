import './App.css'
import Description from './features/Graph/components/Description'
import Graph from './features/Graph/components/Graph'
import Refresh from './features/Graph/components/Refresh'
import { DataProvider } from './features/Graph/context/DataContext'
import Popupspace from './features/popup/components/Popupspace'
import { PopupProvider } from './features/popup/context/PopupContext'

function App() {

  return (
    <div className='App'>
    <PopupProvider>
    <DataProvider>
      <div>
      <Graph/>
      <Refresh/>
      </div>
      <Description/>
    </DataProvider>
      <Popupspace/>
    </PopupProvider>
    </div>
  )
}

export default App

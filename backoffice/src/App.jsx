import { getAllNFTs, isWallectConnected } from "./Blockchain.services";
import CreateNFT from "./components/CreateNFT";
import Show from "./components/CreateNFT";
import Header from "./components/Header";
import { useEffect } from 'react'
import Loading from './components/Loading'
import Alert from './components/Alert'
import UpdateNFT from "./components/UpdateNFT";
import { setGlobalState } from "./store";



const App = () => {
    useEffect(async ()=> {
      await isWallectConnected().then(() => {
        getAllNFTs()
      })
    }, [])
 
  
  return (
    
    <div className="min-h-screen" >
      <div className='gradient-bg-hero'>
      <div>
      
    </div>
    
      <Header/>
      <CreateNFT/>
    <UpdateNFT/>
    <Alert />
      <Loading />
      </div>
    </div>
    
  )
}

export default App;
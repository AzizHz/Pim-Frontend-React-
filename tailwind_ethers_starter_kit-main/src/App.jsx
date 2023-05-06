import Nft from './views/Nft'
import Home from './views/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import PlaceBid from './components/PlaceBid'
import Collections from './views/Collections'
import CreateNFT from './components/CreateNFT'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import { isWalletConnected, loadAuctions } from './services/Blockchain'
import { setGlobalState, useGlobalState } from './Store'
import OfferItem from './components/OfferItem'
import ChangePrice from './components/ChangePrice'
import { checkAuthState } from './services/Chat'
import Loading from './components/Loading'
function App() {
  const [loaded, setLoaded] = useState(false)
  const [auction] = useGlobalState('auction')
  useEffect(async () => {
    await isWalletConnected()
    await loadAuctions().finally(() => setLoaded(true))
    await checkAuthState()
      .then((user) => setGlobalState('currentUser', user))
      .catch((error) => setGlobalState('currentUser', null))
    console.log('Blockchain Loaded')
  }, [])

  return (
    <div
      className="min-h-screen bg-gradient-to-t from-blue-900 bg-repeat
    via-[#1E3A8A] to-red-700 bg-center subpixel-antialiased"
    >
      <Header />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/nft/:id" element={<Nft />} />
        </Routes>
      ) : null}
      <CreateNFT/>
      {/* <Alert /> */}
      <Loading/>
      {auction ? (
        <>
          <PlaceBid />
          <OfferItem />
          <ChangePrice />
        </>
      ) : null}
      <Footer />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
export default App

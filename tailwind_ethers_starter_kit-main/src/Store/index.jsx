import { createGlobalState } from 'react-hooks-global-state'

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  boxModal: 'scale-0',
  bidBox: 'scale-0',
  offerModal: 'scale-0',
  priceModal: 'scale-0',
  alert: { show: false, msg: '', color: '' },
  loading: { show: false, msg: '' },
  connectedAccount: '',
  collections: [],
  bidders: [],
  auctions: [],
  auction: null,
  currentUser: null,
  group: null,
})
const setAlert = (msg, color = 'green') => {
    setGlobalState('loading', false)
    setGlobalState('alert', { show: true, msg, color }) //set true
    setTimeout(() => {
      setGlobalState('alert', { show: false, msg: '', color })
    }, 6000)
  }
  
  const setLoadingMsg = (msg) => {
    const loading = getGlobalState('loading')
    setGlobalState('loading', { ...loading, msg })
  }
const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars)
    let end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const convertToSeconds = (minutes, hours, days) => {
  const seconds = minutes * 60 + hours * 3600 + days * 86400
  const timestamp = new Date().getTime()
  return timestamp + seconds
}

export {
  getGlobalState,
  useGlobalState,
  setGlobalState,
  truncate,
  convertToSeconds,
  setAlert,
  setLoadingMsg,
}

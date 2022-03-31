import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

import Land from './abis/Land.json';

function App() {

  const [web3,setWeb3] = useState(null);
  const [account,setAccount] = useState(null);
  const [landContract,setLandContract] = useState(null);
  const [cost,setCost] = useState(null);
  const [buildings,setBuildings] = useState(null);

  useEffect( () => {
    loadBlockchainData()
  }, [account])

  const loadBlockchainData = async () => {
    if(typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum)
      setWeb3(web3)

      const accounts = await web3.eth.getAccounts();

      if(account.length > 0) {
        setAccount(accounts[0])
      }

      const networkId = await web3.eth.net.getId()

      const land = new web3.eth.Contract(Land.abi, Land.networks[networkId].address)
      setLandContract(land)

      const cost = await land.methods.cost().call()
      setCost(web3.utils.fromWei(cost.toString(), 'ether'))

      const buildings = await land.methods.getBuildings().call()
      setBuildings(buildings)

      // adding event listener - recommended from metamask api
      window.ethereum.on('accountsChanged', function (accounts) {
        setAccount(accounts[0])
      })

      // adding event listener 
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      }
    }
  }

  const web3Handler = async () => {
    if (web3) {
      const account = await window.ethereum.request({ method: 'eth_requestAccounts'});
      setAccount(accounts[0])
    }
  }

  return (
    <div>
      Her Virtual Land
    </div>
  );
}

export default App;

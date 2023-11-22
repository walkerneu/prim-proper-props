import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import GuestList from '../GuestList/GuestList.jsx'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.jsx'
import GuestForm from '../GuestForm/GuestForm.jsx'
import PartyLeader from '../PartyLeader/PartyLeader.jsx'

function App() {
  let [guestList, setGuestList] = useState([]);

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  // const deleteGuest = (id) => {
  //   axios.delete(`/guests/${id}`)
  //     .then(response => {
  //       getGuests()
  //     })
  //     .catch(err => {
  //       alert('error deleting guests');
  //       console.log(err);
  //     })
  // }


  useEffect(() => {
    getGuests()
  }, [])

  return (
    <div className="App">
      <Header />
      <PartyLeader 
        leader={ guestList[0] } 
      />
      <GuestForm 
        getGuests={getGuests}
      />
      <GuestList 
        guestList={guestList}
        getGuests={getGuests}
      />
      <DinnerSupplies 
        count={guestList.length}
      />
      <Footer />
    </div>
  );
}

export default App;

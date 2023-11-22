import axios from 'axios';

function DeleteButton ({ guestId, getGuests }){

    const deleteGuest = () => {
        axios.delete(`/guests/${guestId}`)
          .then(response => {
            getGuests()
          })
          .catch(err => {
            alert('error deleting guests');
            console.log(err);
          })
      }

    return (
        <button
            onClick={deleteGuest}
        >
            Delete Guest
        </button>
    )
}

export default DeleteButton;
import DeleteButton from "../DeleteButton/DeleteButton";

function Guest ({ guest, getGuests }) {

    return (
        <tr>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
              <td>
                <DeleteButton 
                    guestId={guest.id}
                    getGuests={getGuests}
                />
              </td>
            </tr>
    )

}

export default Guest;
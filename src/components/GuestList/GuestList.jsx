import DeleteButton from "../DeleteButton/DeleteButton";

function GuestList ({guestList, getGuests}){

    return (
      <>
      <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map(guest => (
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
              <td>
                <DeleteButton 
                    guestId={guest.id}
                    getGuests={getGuests}
                />
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        </>
    )
}

export default GuestList;
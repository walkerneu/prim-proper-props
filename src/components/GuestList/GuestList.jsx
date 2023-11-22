import Guest from "../Guest/Guest";

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
            <Guest
                key={guest.id}
                guest={guest}
                getGuests={getGuests}
            />
          ))}
        </tbody>
        </table>
        </>
    )
}

export default GuestList;

function DeleteButton ({ id, deleteGuest }){
    return (
        <button
            onClick={deleteGuest(id)}
        >
            Delete Guest
        </button>
    )
}

export default DeleteButton;
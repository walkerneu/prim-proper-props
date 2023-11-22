function PartyLeader ({ leader }) {
console.log('leader:', leader)
        return (
            <>
            <h2>Party Leader:</h2>
            <h3>{leader && leader.name}</h3>
            </>
        )
}

export default PartyLeader;
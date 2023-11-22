import SilverWare from '../SilverWare/SilverWare.jsx'

function DinnerSupplies ({ count }) { 
    
    return (
        <>
            <h2>Dinner Supplies</h2>
            <SilverWare 
                count={count}/>
            <SilverWare 
                count={count}
            />
            <SilverWare 
                count={count}
            />
        </>
    )
}

export default DinnerSupplies;
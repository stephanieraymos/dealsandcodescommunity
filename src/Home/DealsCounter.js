import React, {useState} from 'react'

const DealsCounter = () => {

    const [counterVal, setCounterVal] = useState(0)
    return (
        <div>
            <h2 data-testid="deal-counter">{counterVal}</h2>
        </div>
    )
}

export default DealsCounter

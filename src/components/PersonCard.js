import React, { useState } from 'react'

const PersonCard = props => {
    const { firstName, lastName, age, hairColor } = props
    const [stateAge, setStateAge] = useState(age)

    const handleBirthday = () => {
        setStateAge(stateAge + 1)
    }

    return (
        <>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { stateAge }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ handleBirthday }>Birthday Button for {firstName} {lastName}</button>
        </>
    )
}

export default PersonCard
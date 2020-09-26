import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>Hello my name is {person.name}. I have {person.skill} skill</h2>
        </div>
    )
}

export default Person

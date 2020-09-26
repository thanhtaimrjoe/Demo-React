import React from 'react'
import Person from './Person'

function List() {
    const persons = [
        {
            id: 1,
            name: 'Luffy',
            skill: 'Gomu Gomu'
        },
        {
            id: 2,
            name: 'Zoro',
            skill: 'Kiem Si'
        },
        {
            id: 3,
            name: 'Sanji',
            skill: 'Cooker'
        }
    ]
    const personList = persons.map(person => <Person person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default List

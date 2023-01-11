import { useState, useEffect } from 'react'
import personService from './services/persons'

const Filter = (props) => {
  return (
    <div>
      {props.text} <input value={props.value} onChange={props.handler} />
    </div>
  )
}

const Personform = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div>
        {props.nametext} <input value={props.valuename} onChange={props.handlechangename} />
      </div>
      <div>
        {props.numbertext} <input value={props.valuenumber} onChange={props.handlechangenumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const PersonInfo = ({ personContent, deleteinfo }) => {
  return (
    <li>
      {personContent.name} {personContent.number}
      <button onClick={deleteinfo}>delete</button>
    </li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [showAll, setShowAll] = useState(true)

  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name === filterValue)

  
  const handleFilter = (event) => {
    setShowAll(false)
    setFilterValue(event.target.value)
  }

  const handlechange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberchange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber}
    if (persons.filter(elem => elem.name === nameObject.name).length > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      personService
        .add(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deleteName = (id) => {
    const removethis = persons.find(n => n.id === id)
    const index = persons.indexOf(removethis)
    persons.splice(index, 1)
    if(window.confirm(`Delete ${removethis.name}?`)) {
      personService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.concat())
        })
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        text='filter with:'
        value={filterValue} 
        handler={handleFilter} 
      />
      <h3>add a new</h3>
      <Personform
        nametext='name:'
        valuename={newName}
        numbertext='number:'
        valuenumber={newNumber}
        handlechangename={handlechange}
        handlechangenumber={handleNumberchange}
        submit={addName}     
      />
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map(person => 
          <PersonInfo
            key={person.name}
            personContent={person} 
            deleteinfo={() => deleteName(person.id)}
          />
        )}
      </ul>
    </div>
  )

}

export default App

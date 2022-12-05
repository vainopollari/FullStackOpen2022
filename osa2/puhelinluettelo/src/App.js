import { useState } from 'react'

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

const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.func.map(content => 
          <li key={content.name}>
            {content.name} {content.number}
          </li>
        )}
      </ul>
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [showAll, setShowAll] = useState(true)

  const [filterValue, setFilterValue] = useState('')

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
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')
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
      <Persons func={personsToShow} />
    </div>
  )

}

export default App

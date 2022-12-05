import { useState } from 'react'

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
    console.log(filterValue)
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
      <div>
        filter shown with <input value={filterValue} onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlechange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberchange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(content => 
          <li key={content.name}>
            {content.name} {content.number}
          </li>
        )}
      </ul>
    </div>
  )

}

export default App

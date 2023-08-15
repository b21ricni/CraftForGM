import { useState } from "react"
import "./styles.css"

export default function App(){
  const [character, setCharacter] = useState([])
  const [newCharacterName, setNewCharacterName] = useState("")
  const [newCharacterRace, setNewCharacterRace] = useState("")
  const [newCharacterPersonality, setNewCharacterPersonality] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    setCharacter((currentCharacter) => {
      return [
        ...currentCharacter,
        { id: crypto.randomUUID(), name: newCharacterName, race: newCharacterRace, personality: newCharacterPersonality, selected: false },
      ]
    })

    setNewCharacterName("")
    setNewCharacterRace("")
    setNewCharacterPersonality("")
    
  }

  function toggleCharacter(id, selected){
    setCharacter(currentCharacter => {
      return currentCharacter.map(character => {
        if (character.id === id){
          return {...character, selected}
        }

        return character
      })
    })
  }

  function deleteCharacter(id){
    setCharacter(currentCharacter => {
      return currentCharacter.filter(character => character.id !== id)
    })
  }

  return (
  <>
    <form onSubmit={handleSubmit} className="new-character-form">
      <div className="form-row">
        <label htmlFor="">Name</label>
        <input 
          value={newCharacterName} 
          onChange={e => setNewCharacterName(e.target.value)} 
          type="text" 
          id="name-input" 
        />
      </div>

      <div className="form-row">
        <label htmlFor="">Race</label>
        <input 
          value={newCharacterRace} 
          onChange={e => setNewCharacterRace(e.target.value)}
          type="text" 
          id="race-input" 
        />
      </div>

      <div className="form-row">
        <label htmlFor="">Personality</label>
        <input 
          value={newCharacterPersonality} 
          onChange={e => setNewCharacterPersonality(e.target.value)} 
          type="text" 
          id="personality-input" 
        />
      </div>

      <button className="btn btn-create-character">Create Character</button>
    </form>

    <h1 className="header">Characters</h1>
    <ul className="list">
      {character.length === 0 && "No created characters"}
      {character.map(character => {
        return (
          <li key={character.id}>
            <label>
              <input onChange={e => toggleCharacter(character.id, e.target.selected)} type="checkbox" checked={character.selected}/>
              {character.name}
              {character.race}
              {character.personality}
            </label>
            <button onClick={() => deleteCharacter(character.id)} className="btn btn-delete-character">X</button>
          </li>
        )
      })}
    </ul>
  </>
  )
}

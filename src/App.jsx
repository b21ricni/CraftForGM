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
        { id: crypto.randomUUID(), name: newCharacterName, race: newCharacterRace, personality: newCharacterPersonality, marked: false },
      ]
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
      {character.map(character => {
        return (
          <li>
            <label>
              <input type="checkbox" checked={character.marked}/>
              {character.name}
              {character.race}
              {character.personality}
            </label>
            <button className="btn btn-delete-character">X</button>
          </li>
        )
      })}
    </ul>
  </>
  )
}

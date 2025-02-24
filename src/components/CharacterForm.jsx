import React, { useState } from "react";
import pkg from "file-saver";
const { saveAs } = pkg;

const speciesOptions = [
  {
    name: "Mutated Humans",
    image: "/TRPG/assets/karkorte/kraken.png",
    description: "",
  },
  {
    name: "Woodland Creatures",
    image: "/TRPG/assets/karkorte/kraken.png",
    description: "",
  },
  {
    name: "Bird Pirates",
    image: "/TRPG/assets/karkorte/kraken.png",
    description: "",
  },
];

const classOptions = [
  {
    name: "Scavenger",
    image: "/TRPG/assets/karkorte/kraken.png",
    description: "",
  },
  {
    name: "Hunter",
    image: "/TRPG/assets/karkorte/kraken.png",
    description: "",
  },
  {
    name: "Ranger",
    image: "/TRPG/assets/karkorte/kraken.png",
    description: "",
  },
];

const CharacterForm = () => {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    species: "",
    class: "",
    background: "",
    stats: { Strength: 5, Intelligence: 5, Agility: 5 },
  });

  const handleSelection = (key, value) => {
    setCharacter({ ...character, [key]: value });
  };

  const nextStep = () => {
    if (step === 1 && !character.species) {
      alert("Please select a species first.");
      return;
    }
    if (step === 2 && !character.class) {
      alert("Please select a class first.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const exportToPDF = () => {
    const jsonData = JSON.stringify(character, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "character.json");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {step === 1 && (
        <>
          <h2>Select a Species</h2>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            {speciesOptions.map((option) => (
              <div
                key={option.name}
                onClick={() => handleSelection("species", option.name)}
                style={{
                  cursor: "pointer",
                  border:
                    selectedSpecies === option.name
                      ? "2px solid #61dafb"
                      : "none",
                  borderRadius: "10px",
                  padding: "10px",
                  transition: "0.3s ease-in-out",
                }}
              >
                <img
                  src={option.image}
                  alt={option.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>{option.name}</p>
                <small>{option.description}</small>
              </div>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Select a Class</h2>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            {classOptions.map((option) => (
              <div
                key={option.name}
                onClick={() => handleSelection(option.name)}
                style={{
                  cursor: "pointer",
                  border:
                    selectedClass === option.name
                      ? "2px solid #61dafb"
                      : "none",
                  borderRadius: "10px",
                  padding: "10px",
                  transition: "0.3s ease-in-out",
                }}
              >
                <img
                  src={option.image}
                  alt={option.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>{option.name}</p>
                <small>{option.description}</small>
              </div>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2>Choose Background</h2>
          <select
            onChange={(e) => handleSelection("background", e.target.value)}
          >
            <option value="">Select a background...</option>
            <option value="Nomad">Nomad - Always on the move</option>
            <option value="Scholar">Scholar - Seeker of knowledge</option>
            <option value="Merchant">Merchant - Deals and trade</option>
          </select>
        </>
      )}

      {step === 4 && (
        <>
          <h2>Assign Stats</h2>
          <p>Adjust your character's stats (total: 15 points)</p>
          <input
            type="number"
            value={character.stats.Strength}
            onChange={(e) =>
              setCharacter({
                ...character,
                stats: { ...character.stats, Strength: e.target.value },
              })
            }
          />
          <label> Strength</label>
          <br />
          <input
            type="number"
            value={character.stats.Intelligence}
            onChange={(e) =>
              setCharacter({
                ...character,
                stats: { ...character.stats, Intelligence: e.target.value },
              })
            }
          />
          <label> Intelligence</label>
          <br />
          <input
            type="number"
            value={character.stats.Agility}
            onChange={(e) =>
              setCharacter({
                ...character,
                stats: { ...character.stats, Agility: e.target.value },
              })
            }
          />
          <label> Agility</label>
        </>
      )}

      {step === 5 && (
        <>
          <h2>Finalize Your Character</h2>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Class:</strong> {character.class}
          </p>
          <p>
            <strong>Background:</strong> {character.background}
          </p>
          <p>
            <strong>Stats:</strong> Strength: {character.stats.Strength},
            Intelligence: {character.stats.Intelligence}, Agility:{" "}
            {character.stats.Agility}
          </p>
          <button
            onClick={exportToPDF}
            style={{
              padding: "10px",
              background: "#61dafb",
              border: "none",
              cursor: "pointer",
            }}
          >
            Export Character
          </button>
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button onClick={prevStep} style={{ marginRight: "10px" }}>
            Back
          </button>
        )}
        {step < 5 ? (
          <>
            <button onClick={nextStep} style={{ marginRight: "10px" }}>
              Next
            </button>
            <button onClick={skipStep}>Skip</button>
          </>
        ) : (
          <button onClick={() => alert("Character finalized!")}>Finish</button>
        )}
      </div>
    </div>
  );
};

export default CharacterForm;
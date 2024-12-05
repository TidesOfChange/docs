import React from "react";

export default function CharacterForm() {
  const downloadCharacter = () => {
    const form = document.getElementById("characterForm");
    const formData = new FormData(form);

    // Collect selected options
    const character = {
      region: formData.get("region"),
      species: formData.get("species"),
      class: formData.get("class"),
    };

    // Check if all fields are selected
    if (!character.region || !character.species || !character.class) {
      alert("Please make selections for all categories.");
      return;
    }

    // Convert character object to JSON and create a downloadable file
    const characterJSON = JSON.stringify(character, null, 2);
    const blob = new Blob([characterJSON], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "character.json";
    link.click();
  };

  return (
    <form id="characterForm">
      <h2>Select a Region</h2>
      <label>
        <input type="radio" name="region" value="Aeolian Archipelago" />
        Aeolian Archipelago
      </label>
      <label>
        <input type="radio" name="region" value="Lumea" />
        Lumea
      </label>
      <label>
        <input type="radio" name="region" value="Karkorte" />
        Karkorte
      </label>

      <h2>Select a Species</h2>
      <label>
        <input type="radio" name="species" value="Mutated Humans" />
        Mutated Humans
      </label>
      <label>
        <input type="radio" name="species" value="Woodland Creatures" />
        Woodland Creatures
      </label>
      <label>
        <input type="radio" name="species" value="Bird Pirates" />
        Bird Pirates
      </label>

      <h2>Select a Class</h2>
      <label>
        <input type="radio" name="class" value="Scavenger" />
        Scavenger
      </label>
      <label>
        <input type="radio" name="class" value="Hunter" />
        Hunter
      </label>
      <label>
        <input type="radio" name="class" value="Ranger" />
        Ranger
      </label>

      <button type="button" onClick={downloadCharacter}>
        Create Character
      </button>
    </form>
  );
}

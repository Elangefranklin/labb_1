// Hämta en referens till checkbox-elementet genom att använda querySelector.
// Detta söker efter ett element av typen <input> med attributet type='checkbox'.
const divStyleCheckbox = document.querySelector("input[type='checkbox']");

// Hämta alla textfält med klassen "textfield".
// getElementsByClassName returnerar en HTMLCollection som är liknande en array.
const textFields = document.getElementsByClassName("textfield");

// Hämta den första knappen på sidan med querySelector.
// Detta väljer det första <button>-elementet som finns i dokumentet.
const removeButton = document.querySelector("button");

// Hämta ett specifikt <div>-element med ID "emptyDiv".
// getElementById används här för att snabbt få referensen till det elementet.
const emptyDiv = document.getElementById("emptyDiv");

// Funktion som hanterar inmatning i textfälten (Uppgift 5).
function handleInputEvent(e) {
  // Hämta det element som triggat eventet (dvs. det aktuella textfältet).
  const target = e.target;

  // Logga det textfält som genererade eventet till konsolen.
  console.log("Fältet som genererar", target);

  // Kontrollera om det är ett textfält med attributet name="content".
  const fieldName = target.name;
  if (fieldName === "content") {
    // Om det är fallet, uppdatera innehållet i div-elementet
    // genom att sätta dess HTML till värdet i textfältet.
    emptyDiv.innerHTML = target.value;
  }
}

// Lägg till en anonym funktion som eventlyssnare på checkboxen (Uppgift 6).
divStyleCheckbox.addEventListener("change", () => {
  // Standardvärde för färg är en tom sträng.
  let chosenColor = "";

  // Iterera genom alla textfält för att hitta det som har name="color".
  for (let i = 0; i < textFields.length; i++) {
    if (textFields[i].name === "color") {
      // Om fältet hittas, hämta dess värde och avsluta loopen.
      chosenColor = textFields[i].value;
      break;
    }
  }

  // Sätt bakgrundsfärgen på div-elementet till den valda färgen.
  emptyDiv.style.backgroundColor = chosenColor;

  // Logga den nya bakgrundsfärgen till konsolen.
  console.log(`Bakgrundsfärgen ändrades till: ${chosenColor}`);
});

// Lägg till en anonym funktion som eventlyssnare på knappen (Uppgift 6).
removeButton.addEventListener("click", () => {
  // Ta bort div-elementet genom att ändra dess display till "none",
  // vilket döljer det visuellt men lämnar det kvar i DOM-trädet.
  emptyDiv.style.display = "none";

  // Logga en bekräftelse på att div-elementet har tagits bort.
  console.log("Div-elementet har tagits bort.");
});

// Lägg till eventlyssnaren `handleInputEvent` på alla textfält (Uppgift 6).
// Iterera genom HTMLCollection `textFields` med en for-loop.
for (let i = 0; i < textFields.length; i++) {
  // Koppla eventlyssnaren `handleInputEvent` till "input"-eventet för varje textfält.
  textFields[i].addEventListener("input", handleInputEvent);
}

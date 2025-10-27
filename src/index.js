function displayPoem(response){
    
    console.log("poem generated")
     new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
});
}  



function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "8ocd344800t15729aafe29dbb6a3a7a9";
    let context ="You are a funny poem expert and love to write short poems. Your mission is to generate a 4 line poem and seperate each line with a <br />. make sure to follow user instructions. Sign the code with 'SheCodes AI' inside <strong> element";
    let prompt =`User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating Poem about ${instructionsInput.value}</div>`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);


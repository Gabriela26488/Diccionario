const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const diccionario = document.getElementById('diccionario')
const sonido = document.getElementById('sonido')
const btn = document.getElementById('btn');
const sinonimos = document.querySelector(".sinonimo .lista");
const volumen = document.querySelector(".palabra .vol")


btn.addEventListener("click", () =>{

    let palabra = document.getElementById("input").value;

    fetch(`${url}${palabra}`)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);

            diccionario.classList.add("active");
            
            let definiciones = data[0].meanings[0].definitions[0],
            phonetics = `${data[0].meanings[0].partOfSpeech} / ${data[0].phonetics[1].text}/`


            document.querySelector(".palabra h2").innerText = data[0].word;
            document.querySelector(".adj p").innerText = phonetics;
            document.querySelector(".significado p").innerText = definiciones.definition;
            document.querySelector(".fuente p").innerText = data[0].sourceUrls[0];
            let audio = new Audio("https:"+ data[0].phonetics[0].audio)   

            if (data[0].meanings[0].synonyms[0] == undefined) {
                sinonimos.parentElement.style.display = "none";
            } else {
                sinonimos.parentElement.style.display = "block";
                sinonimos.innerHTML = "";
                for (let i = 0; i < 5; i++) {
                    let tag = `<span>${data[0].meanings[0].synonyms[i]} /</span>`;
                    sinonimos.insertAdjacentHTML("beforeend", tag);
                }
            }
           // sonido.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
           
            volumen.addEventListener("click", () =>{
                audio.play();
            })

           
            
           
            

            
    })
   
})
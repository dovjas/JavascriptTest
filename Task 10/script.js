/* ------------------------------ TASK 10 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti skaičių, kuris turi būti ne mažiau 1, ir ne daugiau 9 (1-9 imtinai)

Jeigu įvesta neteisinga vertė - atsiranda "error" žinutė ir prašoma įvesti skaičių nuo 1 iki 9.
Error atvaizdavimas bloke - <div class="error">

Jeigu įvesta vertė tiko - nusispalvina to skaičiaus langelis lentelėje. 

Įvedus naują tinkantį skaičių, nusispalvina naujas atitinkamo skaičiaus
 langelis, o senas vėl tampa baltas.

Jeigu norite, galite naudotis turimu CSS, bet galite pasirašyti ir savo. 
-------------------------------------------------------------------------- */
const form = document.querySelector('form')



form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const input = document.querySelector('#number').value
  const error = document.querySelector('.error') 
  // console.log(input)
  

  const table = document.querySelector("table");
  for (let i = 0; i < table.rows.length; i++) {
    for (let c = 0; c < table.rows[i].cells.length; c++) {
      console.log((table.rows[i].cells[c]))
    }
 

  }
})

  // if (input < 1 || input > 9 ) {
  //  error.style.visibility = "visible"
  // } 

  
  // })
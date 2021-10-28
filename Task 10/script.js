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
const error = document.querySelector('.error')
const table = document.querySelector('table')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = document.getElementById('number').value
    const error = document.querySelector('.error')
    console.log(value)
   
    if (value > 1 && value < 10){
        if (value = 1){
            
        }else{
            document.querySelector('.error').style.visibility ='visible'
        }
    }
})
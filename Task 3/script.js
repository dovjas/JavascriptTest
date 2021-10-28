/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.getElementById("output");
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = "";

      data.forEach((user) => {
        const userData = document.createElement("div");
        const img = document.createElement("img");
        img.style.height = "50px";
        img.style.border = "2px solid red";
        output.style.fontSize = "15px"
        
        img.src = user.avatar_url;
        userData.append(img);
        const login = document.createElement("div");
        login.innerHTML = user.login;
        userData.append(login);
        output.append(userData);
      });
    });
});
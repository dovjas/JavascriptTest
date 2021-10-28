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
btn.addEventListener("click", () => {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      output.textContent = "";

      data.forEach((user) => {
        const userEl = document.createElement("div");
        const img = document.createElement("img");
        img.style.height = "50px";
        img.style.width = "50px";
        img.src = user.avatar_url;
        userEl.append(img);
        const login = document.createElement("div");
        login.textContent = user.login;
        userEl.append(login);
        output.append(userEl);
      });
    });
});
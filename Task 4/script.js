/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";


const output = document.querySelector('#output');

fetch ('cars.json')
    .then((res)=> res.json())
    .then((data)=>{
        data.forEach((car)=>{
            const brandType = document.createElement('div');
            const brand = document.createElement('h1');
            
            brand.style.paddingBottom = '10px';
            brand.style.textAlign = 'center';
            brandType.style.paddingLeft = '20px';
            brandType.style.borderBottom = '3px solid grey';
            brand.textContent = car.brand;
           
            brandType.append(brand);

            const models = document.createElement('h4');
            models.style.paddingBottom = '15px';
            models.style.textAlign = 'center';

            models.textContent = car.models;
           
            brandType.append(models);
            output.append(brandType);

        })
    })
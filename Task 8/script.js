/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(){
    this.sum = (numb1, numb2) => numb1 + numb2;
    this.subtraction = (numb1, numb2) => numb1 - numb2;
    this.multiplication = (numb1, numb2) => numb1 * numb2;
    this.division = (numb1, numb2) => numb1 / numb2
  }
  
  const count = new Calculator
  console.log(count.sum(10,2))
  console.log(count.subtraction(10, 2))
  console.log(count.multiplication(10, 2))
  console.log(count.division(10, 2))
/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite ojektų konstruktorių "Movie" (naudokte ES6), kuris sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor (title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive(){
    if (this.budget > 100000000){
      return true
    }
    
    else{
      return false
    }
  }}
  
  const video = new Movie('Pianistas','Steven Spielberg',5550000)
  console.log(video)
  console.log(video.wasExpensive())
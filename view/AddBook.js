
import Home from "./Home.js";

import Data from "../Api.js";

class AddBooks{

    constructor(){
    this.containerAddBook=document.querySelector(".container");
    this.createAddBookPage();

    // luam un obiect gol de tip carte pt a adauga valorile din api in obiect;
    this.carte= {};

    this.inputBooks= document.querySelector(".inputBooks");

    this.inputBooks.addEventListener("input",this.handleChange);
    this.add=document.querySelector(".newBooks");

    this.add.addEventListener("click",this.handleclickadd);

    this.cancelBtn=document.querySelector(".anuleaza");
    this.cancelBtn.addEventListener("click",this.handleClickCancel);

 
 
    }


    createAddBookPage=()=>{



        this.containerAddBook.innerHTML=`
        <h3>New Book</h3>
        <div class="inputBooks">
           
            <label for="text">Title<label>
            <input type="text" class="titleBook"></input>
            <label for="text">Author</label>
            <input type="text" class="authorBook"></input>
            <label for="text">Genre<label>
            <input type="text" class="genreBook"></input>
            <label for="text">Year<label>
            <input type="text" class="yearBook"></input>
        </div>
       
        
        `
    }


   

    handleChange=(e)=>{


         let obj=e.target;

         if(obj.classList.contains("titleBook")){
            this.carte.title=obj.value;
           
        }

        if(obj.classList.contains("authorBook")){
            this.carte.author=obj.value;
           
        }

        if(obj.classList.contains("genreBook")){
            this.carte.genre=obj.value;
           
        }

        if(obj.classList.contains("yearBook")){
            this.carte.year=obj.value;
           
        }

        //console.log(this.carte);

       


    }

    handleclickadd=(e)=>{
       
        console.log(this.carte);

        let b = new Data();
    
        b.addBook(this.carte);
    
            new Home();



       }

    handleClickCancel=()=>{
          new Home();
  
    }  
 

}


export default AddBooks;
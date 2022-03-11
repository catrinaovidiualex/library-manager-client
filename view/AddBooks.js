import ControlBooks from "../controller/ControlBooks.js";
import Books from "../model/Books.js";
import Home from "./Home.js";

class AddBooks{

    constructor(){
    this.containerAddBook=document.querySelector(".container");
    this.createAddBookPage();
    this.control= new ControlBooks();

    this.carte= new Books();

    this.inputBooks= document.querySelector(".inputBooks");

    this.inputBooks.addEventListener("input",this.handleChange);
    this.add=document.querySelector(".newBooks");

    this.add.addEventListener("click",this.handleclickadd);

 
 
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

        <div class="buttonsAddBooks">
            <input type="submit" value="Create New Book" class="newBooks">
            <button class="anuleaza">Cancel</button>
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

        console.log(this.carte);

       


    }

    handleclickadd=()=>{
       
        this.control.adaugareCarteNoua(this.carte);
       

        new Home();
    
  
       }
 

}


export default AddBooks;
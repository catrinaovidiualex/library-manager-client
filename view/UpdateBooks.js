import ControlBooks from "../controller/ControlBooks.js";
import Books from "../model/Books.js";
import Home from "./Home.js";

export default class UpdateBook{

    constructor(id){
        this.container=document.querySelector(".container");

        this.createUpdateBookPage();


        this.controllerCarti=new ControlBooks();

        this.carte=this.controllerCarti.getCarteById(id);

        
        this.populateBookInputs();

        this.c={id};

        this.containerB=document.querySelector(".updateBooks");
        this.containerB.addEventListener('input',this.handleUpdateOfInputs);

        this.btnModif=document.querySelector(".modifCarte");
        this.btnModif.addEventListener("click",this.handleModificaCarte);

        this.btnDeleteC=document.querySelector(".stergeCarte");
        this.btnDeleteC.addEventListener("click",this.handleStergeCarte);

        this.btnExitChange=document.querySelector(".anuleazaModif");
        this.btnExitChange.addEventListener("click",this.handleAnuleazaModificare);
       
        
    }

    

    createUpdateBookPage=()=>{
    
     this.container.innerHTML=`
     <form class="containerModif">
   

     <div class="updateBooks">
 
         <h3>Update Book</h3>
     
             <label for="text">Title<label>
             <input type="text" class="titleBook"></input>
 
             <label for="text">Author</label>
             <input type="text" class="authorBook"></input>
 
             <label for="text">Genre<label>
             <input type="text" class="genreBook"></input>
 
             <label for="text">Year<label>
             <input type="text" class="yearBook"></input>
     </div>
     
     <div class="buttonsUpdateBooks">
         <button class="modifCarte">Update Book</button>
         <button class="stergeCarte">Delete Book</button>
         <button class="anuleazaModif">Cancel</button>
        
     </div> 
 
   
 </form>
     `



    }

    handleUpdateOfInputs=(e)=>{


        let obj=e.target;

        if(obj.classList.contains("titleBook")){
            this.c.title=obj.value;
           
        }

        if(obj.classList.contains("authorBook")){
            this.c.author=obj.value;
           
        }

        if(obj.classList.contains("genreBook")){
            this.c.genre=obj.value;
           
        }

        if(obj.classList.contains("yearBook")){
            this.c.year=obj.value;
           
        }

       
        

    }

  
    populateBookInputs=()=>{

        let bookTitle=document.querySelector(".titleBook");
        bookTitle.value=this.carte.title;

        let bookAuthor=document.querySelector(".authorBook");
        bookAuthor.value=this.carte.author;

        let bookGenre=document.querySelector(".genreBook");
        bookGenre.value=this.carte.genre;

        let bookYear=document.querySelector(".yearBook");
        bookYear.value=this.carte.year;
        
        

    }



    handleModificaCarte=(e)=>{

        e.preventDefault();

        console.log("modificare carte");

         this.controllerCarti.updateBook(this.c);

         new Home();

         
    }

    handleStergeCarte=(e)=>{
        e.preventDefault();
        console.log("sterge carte");
         this.controllerCarti.stergeCarte(this.c);
         new Home();
    }

    handleAnuleazaModificare=(e)=>{
        e.preventDefault();
        new Home();
    }

}
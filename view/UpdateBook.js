
import Home from "./Home.js";

export default class UpdateBook{

    constructor(title){
        this.container=document.querySelector(".container");

        this.createUpdateBookPage();
         
        this.populateBookInputs();

        this.title=title;
        this.carte={};

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

    handleUpdateOfInputs=()=>{


       

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
        bookTitle.value=this.title;

        let bookAuthor=document.querySelector(".authorBook");
        bookAuthor.value=this.author;

        let bookGenre=document.querySelector(".genreBook");
        bookGenre.value=this.genre;

        let bookYear=document.querySelector(".yearBook");
        bookYear.value=this.year;
          
        
        

    }



    handleModificaCarte=(e)=>{

        e.preventDefault();

        console.log("modificare carte");

         this.updateBook(this.carte);

         new Home();

         
    }

    handleStergeCarte=(e)=>{
        e.preventDefault();
        console.log("sterge carte");
        // this.controllerCarti.stergeCarte(this.c);
         new Home();
    }

    handleAnuleazaModificare=(e)=>{
        e.preventDefault();
        new Home();
    }



}
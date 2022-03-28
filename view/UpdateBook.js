
import Home from "./Home.js";
import Api from "../Api.js";

export default class UpdateBook{

    constructor(id){
        this.api= new Api();
        this.id=id;
        this.container=document.querySelector(".container");

        this.createUpdateBookPage();
         
        this.populateBookInputs();

        this.carte={id:id};
        

       
        

        this.containerB=document.querySelector(".updateBooks");
        this.containerB.addEventListener('input',this.handleUpdateOfInputs);

        this.btnModif=document.querySelector(".modifCarte");
        this.btnModif.addEventListener("click",this.handleModificaCarte);

        this.btnDeleteC=document.querySelector(".stergeCarte");
        this.btnDeleteC.addEventListener("click",this.handleStergeCarte);

        this.btnExitChange=document.querySelector(".anuleazaModif");
        this.btnExitChange.addEventListener("click",this.handleAnuleazaModificare);

       
        
    }

    

    createUpdateBookPage= async()=>{
    

      

     this.container.innerHTML=`
     <form class="containerModif">
   

     <div class="updateBooks">
 
         <h3>Update Book</h3>
     
             <label for="text">Title<label>
             <input type="text" class="titleBook"></input>
 
             <label for="text">Author</label>
             <input type="text" class="authorBook" ></input>
 
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


        console.log(this.carte);
       

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

       
        

    }
  
    populateBookInputs=async ()=>{

        let book= await this.api.getBookById(this.id);


        this.carte=book;


        let bookTitle=document.querySelector(".titleBook");
        bookTitle.value=book.title;

        let bookAuthor=document.querySelector(".authorBook");
        bookAuthor.value=book.author;

        let bookGenre=document.querySelector(".genreBook");
        bookGenre.value=book.genre;

        let bookYear=document.querySelector(".yearBook");

        bookYear.value=book.year;
          

    }

    handleModificaCarte=async(e)=>{

        e.preventDefault();

        console.log("modificare carte");




       await this.api.updateBook(this.carte);

        

       
         location.reload();
         

         
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
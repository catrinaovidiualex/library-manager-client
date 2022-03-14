

import AddBooks from "../view/AddBooks.js";

import UpdateBooks from "../view/UpdateBooks.js";

import Data from "../Api.js";

class Home{


     constructor(){
         this.data= new Data();

        this.container=document.querySelector(".container");

        this.createPage();

       

        this.populateTable();

        this.btnCreareCarte=document.querySelector(".createBook");
        this.btnCreareCarte.addEventListener("click",this.handleclick);

        
        this.tableBooks=document.querySelector(".tableBooks");
        this.tableBooks.addEventListener("click",this.handleSelectBook);
        

        

       
     }

     createPage=()=>{

        this.container.innerHTML=`
        
        
        <h3>Books</h3>
        <button class="createBook">Create New Book</button>
        <table class="tableBooks">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Year</th>
    
                 </tr>
    
            </thead>
    
            <tbody class="table">
               
    
               
            </tbody>
    
        </table>
    
        
        `

     }

     populateTable= async()=>{
       
        let books= await  this.data.books();
        let table=document.querySelector(".table");

        books.forEach((e)=>{

            table.innerHTML+=`
            
        <tr>
            <td scope="row"><a href="#" class="linkBooks">${e.title}</a></td>
            <td>${e.author}</td>
            <td>${e.genre}</td>
            <td>${e.year}</td>
        </tr>
            
            `
        })
     }

     handleclick=(e)=>{


        e.preventdefault;

        console.log("adaugare carte");


        new AddBooks();
       


     }

    
    // de verificat functia !
     handleSelectBook=(e)=>{
        

      let obj=e.target;

      if(obj.classList.contains("linkBooks")){
       
          // extragem titlu-ul cartii
         
         //let titleB=obj.parentNode.previousSibling.parentNode.textContent.trim();
         let titleB=obj.parentNode.textContent;

         new UpdateBooks(titleB);

      }

     }

     handleUpdateBooks=(e)=>{
        let obj=e.target;

      console.log(obj);

     }

}
export default Home;

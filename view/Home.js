import AddBook from "../view/AddBook.js";
import Data from "../Api.js";
import UpdateBook from "../view/UpdateBook.js";

class Home{


     constructor(){
        this.data= new Data();

        this.container=document.querySelector(".container");

        this.createPage();
      
        this.populateTable();
    
        this.btnCreateNB=document.querySelector(".createBook");
        this.btnCreateNB.addEventListener("click", this.handleclick);

        this.tableBooks=document.querySelector(".tableBooks");
        this.tableBooks.addEventListener("click",this.handleSelectBook);

       
        this.btnSortBooks=document.querySelector(".sortare");
        this.btnSortBooks.addEventListener("click",this.handleSort);

        this.btnFilterBooks=document.querySelector(".inputFilter");
        this.btnFilterBooks.addEventListener("keypress",this.handleFilter);

        this.btnExitChange=document.querySelector(".anuleaza");
        this.btnExitChange.addEventListener("click",this.handleClickCancel);
            
     }

     createPage=()=>{

        this.container.innerHTML=`
        
        
        <h3>Books</h3>
        <button class="createBook">Create New Book</button>
        <label for="text">Filter by Title<label>
        <input type="text" class="inputFilter"></input>
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

        
    <div class="otherButtons">
        <button class="anuleaza">Cancel</button>
        <button class="sortare">Sort by Year</button>
             
    </div>
    
        
        `

     }

     populateTable= async()=>{
       
        let books= await  this.data.books();

        let table=document.querySelector(".table");

        table.innerHTML="";

        books.forEach((e)=>{

            table.innerHTML+=`
            
        <tr id=${e.id}>
            <td scope="row"><a href="#" class="linkBooks">${e.title}</a></td>
            <td>${e.author}</td>
            <td>${e.genre}</td>
            <td>${e.year}</td>
        </tr>
            
            `
        })
     }



     populateSortedTable=(arr)=>{
     
      console.log(arr);
   
     let table=document.querySelector(".table");


     table.innerHTML="";

     arr.forEach((e)=>{

     table.innerHTML+=`
         
     <tr id=${e.id}>
         <td scope="row"><a href="#" class="linkBooks">${e.title}</a></td>
         <td>${e.author}</td>
         <td>${e.genre}</td>
         <td>${e.year}</td>
     </tr>
     `

     });


     }

     handleclick=(e)=>{


        e.preventdefault;

        console.log("catre pagina de adaugare carte");


        new AddBook();
       


     }


     //functie pentru apasarea pe titlu cartii
     handleSelectBook=(e)=>{
        

        let obj=e.target;
  
        if(obj.classList.contains("linkBooks")){
         
            // extragem titlu-ul cartii
            

            let id=obj.parentNode.parentNode.id
           
           // afiseaza id-ul de mai sus


           new UpdateBook(id);

  
  
        }
  
      }

      handleUpdateBooks=(e)=>{

        let obj=e.target;

        console.log(obj);



     }

     handleSort=async(e)=>{
        let obj=e.target;
        if(obj.classList.contains("sortare")){

         let sortedBooks=await this.data.sortBooks();

         this.populateSortedTable(sortedBooks);

        }

      

     }

   handleFilter=async(e)=>{
      let obj=e.target;


      try{
         if(e.code=="Enter"){

            let filteredBooks=await this.data.filterByTitle(this.btnFilterBooks.value);


           
            this.populateSortedTable(filteredBooks);





         }

      }catch(e){

         console.log(e);
      }

      }
  
        
     handleClickCancel=()=>{
     
      new Home();

      } 



}

export default Home;

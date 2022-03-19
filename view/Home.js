import AddBook from "../view/AddBook.js";
import Data from "../Api.js";

class Home{


     constructor(){
        this.data= new Data();

        this.container=document.querySelector(".container");

        this.createPage();
      
        this.populateTable();
     
        this.btnCreateNB=document.querySelector(".createBook");
        this.btnCreateNB.addEventListener("click", this.handleclick);

            
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

        console.log("catre pagina de adaugare carte");


        new AddBook();
       


     }



    

}
export default Home;

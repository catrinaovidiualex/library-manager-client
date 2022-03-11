import ControlBooks from "../controller/ControlBooks.js"

import AddBooks from "../view/AddBooks.js";

import UpdateBooks from "../view/UpdateBooks.js";

class Home{


     constructor(){

        this.container=document.querySelector(".container");

        this.createPage();




        this.controllMasini=new ControllerMasini();

        this.populateTable();

        this.btnCreareMasina=document.querySelector(".creeazaMasina");
        this.btnCreareMasina.addEventListener("click",this.handleclick);

        
        this.tableCars=document.querySelector(".tableCars");
        this.tableCars.addEventListener("click",this.handleSelectCar);
        this.person=person;

        

       
     }

     createPage=()=>{

        this.container.innerHTML=`
        
        
        <h3>Books</h3>
        <button class="createBook">Create New Book</button>
        <table>
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

     populateTable=()=>{


        let table=document.querySelector(".table");

        this.controllMasini.list.forEach((e)=>{

            table.innerHTML+=`
            <tr>
                <th scope="row">${e.id}</th>
                <td><a href="#" class="linkCars">${e.marca}</a></td>
                <td>${e.pret}</td>
                <td>${e.an}</td>
              </tr>
            
            `
        })
     }

     handleclick=(e)=>{


        e.preventdefault;

        console.log("aici");


        new Addcar();
       


     }

    

     handleSelectCar=(e)=>{
        

      let obj=e.target;

      if(obj.classList.contains("linkCars")){
       
          // extragem id-ul masinii
         
         let idparseInt=obj.parentNode.previousSibling.parentNode.textContent.trim();

         new Updatecar(parseInt(idparseInt));

      }

     }

     handleUpdateCar=(e)=>{
        let obj=e.target;

      console.log(obj);

     }

}
export default Home;

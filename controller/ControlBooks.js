import Books from "../model/Books.js";


class ControlBooks{


     constructor(){

        this.list=[];

        this.load();
     }


     load=()=>{
        let items=localStorage.getItem("carti");
        
        JSON.parse(items).forEach(carte => {
        
        this.list.push(new Books(carte.title,carte.author,carte.genre,carte.year));
            
        });
     }

     afisare=()=>{



        this.list.forEach((e)=>{

             console.log(e);
        })
     }

     //CRUD
     //addbook

     adaugareCarteNoua=(carte)=>{

      this.list.push(carte);
      
      localStorage.removeItem("carti");
      
      localStorage.setItem('carti',JSON.stringify(this.list));
     

    }

     //updateBook

     updateBook=(carte)=>{
       
      let poz=this.pozitieCarte(carte);

      if(poz!=-1){


           if(carte.title!=""&&carte.title){
               this.list[poz].title=carte.title;
              
           }

           if(carte.author!=""&&carte.author){
            this.list[poz].author=carte.author;
           
        }

            if(carte.genre!=""&&carte.genre){
            this.list[poz].genre=carte.genre;
            
         }

            if(carte.year!=""&&carte.year){
               this.list[poz].year=carte.year;
            
         }
        
        this.save();
      }

    

     }

     //deleteBook

     stergeCarte=(carte)=>{

    
      
      let vec=this.list.filter((e)=>e.id!=carte.id);
      this.list=vec;
      this.save();
    
     }


     pozitieCarte=(carte)=>{     
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].id==carte.id){
               return i;
            }
         }
        return -1;
   }

     // pentru a salva datele din lista in localstorage 
      save=()=>{

         localStorage.removeItem("carti");
         localStorage.setItem('carti',JSON.stringify(this.list));
         

      
      }

      getCarteById=(id)=>{

        
         for(let i=0;i<this.list.length;i++){
            if(this.list[i].id==id){
               return this.list[i];
            }
         }
        return -1;
      }



}

export default ControlBooks;

class Books{
      

    constructor(title,author,genre,year){
           
           this.title=title;
           this.author=author;
           this.genre=genre;
           this.year=year;
    }

     descriere=()=>{
         let descriere="";
        
         descriere+=" Titlu cartii: "+this.title+",";
         descriere+=" Autorul cartii: "+this.author+",";
         descriere+=" Tip carte: "+this.genre+",";
         descriere+=" An carte: "+this.year+";";
         
         return descriere;
     }


}





export default Books;
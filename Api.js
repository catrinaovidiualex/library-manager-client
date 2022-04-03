export default class Data{


    api(path,method='GET',body=null){


       const url="http://localhost:8080"+path;


       const options={

            method,
            headers:{

               'Content-Type':'application/json;chartset=utf-8',
            }
       }


       if(body!=null){

                console.log("aici");

           options.body=JSON.stringify(body);
       }


       return fetch(url,options);
    }



    async books(){

       const response= await this.api('/api/v1/books');

       const data = await response.json();

       return data;

    }


    async addBook(book){

        const response = await this.api('/api/v1/books/add','POST',book);

        if(response.status==202){

            return "Est ok";
        }else{

            return "";
        }



    }

    async getBookById(id){

        const response = await this.api('/api/v1/books/'+id);
        const data= await response.json();
        return data;

    }
    async updateBook(bk){
        const response= await this.api('/api/v1/books/update','PUT', bk);
        if (response.status==202){

            return "A fost adaugata";

        }else{
            return "";
        }

    }

    async deleteBook(id){
        const response = await this.api(`/api/v1/books/delete/${id}`,'DELETE');
        if(response.status==202){
            return  "Cartea a fost stearsa";
        }else{
            return"";
            }
    }

    async sortBooks(){
        const response= await this.api('/api/v1/books/sortBooks');

        if(response.status==202){

        const books=await response.json();

        return books;

        }else{

            return "Eroare la sortare carti";
        }
    }

    async filterByTitle(title){
        const response= await this.api(`/api/v1/books/filterBooksByTitle/${title}`);

        if(response.status==202){

        const books=await response.json();

        return books;

        }else{

            return "Eroare la filtrare carti";
        }

    }

}
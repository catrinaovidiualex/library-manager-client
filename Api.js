export default class Data{


    api(path,method='GET',body=null){


       const url="http://localhost:8080"+path;


       const options={

            method,
            headers:{

               'Content-Type':'application/json;chartset=utf-8',
            },
            mode:'cors'
       }


       if(body!=null){

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

}
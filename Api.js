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

       const response= await this.api('/alex');

       const data = await response.json();

       return data;

    }

}
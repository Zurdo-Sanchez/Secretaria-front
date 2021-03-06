import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbService {

    public alerts: Array<any> = [];
    url = " http://10.4.12.14:8000/api"
    //url = " http://localhost:8000/api"
    users : any;


  constructor(private http: HttpClient) { }

  ///////////////////////////////USERS////////////////////////////////////
  login(user:any): Observable<any>{

        var email = user.email;
        var password =user.password;
        var remember_me = true;

        return this.http.post<any>(this.url + '/auth/login', { email, password, remember_me });
  }

  signup(user:any) {
    return this.http.post<any>(this.url + '/auth/signup', user);
  }

  user(type, token){

    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': type + " " + token,
        })
    };
    return this.http.get(this.url + "/auth/user", httpOptions);
}

userList(){
    return this.http.get(this.url + '/auth/list');
}

userEdit(type, token, user) {

    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': type + " " + token,
        })
    };
    console.log(token);
    return this.http.post<any>(this.url + '/auth/edit', user, httpOptions);
  }

logout(type, token){
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': type + " " + token,
        })
    };
    return this.http.get(this.url + "/auth/logout", httpOptions);
    }

///////////////////////////////FILES////////////////////////////////////

file_total(){
    var id = localStorage.getItem('id')
    return this.http.get(this.url + "/files/total/" + id);
}

File_list(status:any){

    return this.http.get(this.url + "/files/store/"+status);
}

File_update(data:any){
    return this.http.post(this.url + '/files/update', data);
}

File_search(data:any){
    return this.http.post(this.url + '/files/search', data);
}

File_validation_create(data:any){
    return this.http.post(this.url + '/files/validation_create', data);
}

File_create(data:any){
    return this.http.post(this.url + '/files/create', data);
}

File_close(status:any){

    return this.http.get(this.url + "/files/close/"+status);
}

///////////////////////////////EXTERNAL PASSE///////////////////////////

External_passe_create(newPasse:any){
    return this.http.post<any>(this.url + '/external_passe/create', newPasse);
}

External_passe_list(){
    return this.http.get(this.url + "/external_passe");
}

External_passe_search(id_file:any){
    return this.http.get(this.url + "/external_passe/"+ id_file);
}

External_passe_update(external_passe){
    return this.http.post(this.url + "/external_passe/update", external_passe);
}

External_passe_export(id){

    window.open(this.url + "/exports/" + id, "_blank");
    //return this.http.get(this.url + "/exports/" + id);
}

External_passe_close(external_passe_id){
    return this.http.get(this.url + "/external_passe/close/" + external_passe_id);
}


///////////////////////////////INTERNAL PASSE///////////////////////////

internal_passe_create(newPasse:any){
    return this.http.post<any>(this.url + '/internal_passe/create', newPasse);
}

internal_passe_list(){
    return this.http.get(this.url + "/internal_passe");
}

internal_passe_search(External_passe_id:any){
    return this.http.get(this.url + "/internal_passe/"+ External_passe_id);
}

internal_passe_update(internal_passe){
    return this.http.post(this.url + "/internal_passe/update", internal_passe);
}



///////////////////////////////OFFICCES////////////////////////////////////

Offices_list(){
    return this.http.get(this.url + "/offices");
}
Offices_edit(office){
    return this.http.post(this.url + "/offices",office);
}

Offices_search(data){
    return this.http.post(this.url + "/offices/search", data);
}

Offices_export(data){
    return this.http.post(this.url + "/exports/offices", data);
}
Excel_export(){

    window.open(this.url + "/exportExcel" , "_blank");
    return this.http.get(this.url + "/exportExcel");
}
///////////////////////////////normativas////////////////////////////////////
Normativas_search(data){
    return this.http.post(this.url + "/normativas/search", data);
}
Normativas_export(name){
    window.open(this.url + "/normativas/export/" + name, "_blank");
}
Normativas_see(name){
    window.open(this.url + "/normativas/see/"+ name, "_blank");
}
Normativas_agrupations_list(){
    return this.http.get(this.url + "/normativas/agrupations");
}
Normativas_types_list(){
    return this.http.get(this.url + "/normativas/types");
}

Nomativas_create(new_normativa:any){

    let headers=new HttpHeaders().set('Content-Type', 'application/pdf').set('Accept','*/*');

    return this.http.post(this.url + "/normativas/create",new_normativa);
}
///////////////////////////////POST-IT////////////////////////////////////

PostItList(){
    return this.http.get(this.url + "/postit/" + localStorage.getItem("id"));
}
PostItEdit(data){
    return this.http.post(this.url + "/postit/edit", data);
}

PostITDetroy(id){
    return this.http.get(this.url + "/postit/destroy/" + id);
}

PostItCreate(data){
    return this.http.post(this.url + "/postit/create", data);
}

PostItShare(data){
    console.log(data);

    return this.http.post(this.url + "/postit/share", data);
}

///////////////////////////////OTHER////////////////////////////////////
Provis_list(search){
    return this.http.post(this.url + "/provis/search",search);
}



Agrupations_list(){
    return this.http.get(this.url + "/agrupations");
}

GoToUrl(url:any){
    return this.http.get(url);
}

GoToUrlFile(url:any,search:any){
    return this.http.post(url, search);
}

}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export abstract class GenericEndpointController<T, TCreateDTO, TUpdateDTO> {
  rootUrl = environment.apiUrl;
  controllerName = '';
  defaultPageSize = 5;
  constructor(private httpBase: HttpClient) {}


  //GETS
  getAll(page: number = 0, pageSize: null|number = null): Observable<T[]> {
    let endpointUrl = this.rootUrl + this.controllerName + this.setPagination(page, pageSize);
    console.log(endpointUrl);
    return this.httpBase.get<T[]>(endpointUrl);
  }
  

  getById(id:number):Observable<T>{
    return this.httpBase.get<T>(`${this.rootUrl}/${id}`)
  }

  //Post & Put
  post(createDTO:TCreateDTO){
    return this.httpBase.post<T>(`${this.rootUrl}`, createDTO);
  }

  update(id:number, updateDTO:TUpdateDTO){
    return this.httpBase.put(`${this.rootUrl}/${id}`, updateDTO);
  }

  //Delete:
  delete(id:number){
    return this.httpBase.delete(`${this.rootUrl}/${id}`)
  }

  count() : Observable<number>{
    return this.httpBase.get<number>(`${this.rootUrl}/count`)
  }

  protected setPagination(page: number, pageSize: null|number){
    let parametters = "?";
    if (page > 0)
      parametters += `page=${page}`
    
    if(pageSize != null){
      if (parametters.length > 1) {
        parametters += `&`
      }
      parametters += `pageSize=${pageSize}`
    }

    return parametters;
  }
}





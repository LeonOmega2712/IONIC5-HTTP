import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosusuarioService {

  constructor(public http: HttpClient) {
  }

  obtenerinformacionuser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  obteneralbumsuser(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId=' + id);
  }

  obtenerfotosalbum(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + id);
  }
}

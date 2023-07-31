import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private showDetails = false;

  constructor(private http: HttpClient) {}

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getDados(limit: number, offset: number): Observable<any> {
    const token = this.getAccessToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(
        `http://localhost:3000/api/pokemon?limit=${limit}&offset=${offset}`,
        { headers }
      );
    } else {
      throw new Error('Token não encontrado');
    }
  }

  setDetails(value: boolean): void {
    this.showDetails = value;
  }

  getDetails(): boolean {
    return this.showDetails;
  }
}

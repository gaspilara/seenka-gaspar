import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private API_URL = "https://randomuser.me/api";
  
  public _personas: Persona[] = [];
  public _personasSub: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>(this._personas);
  public personasSelect: Observable<Persona[]> = this._personasSub.asObservable();

  constructor(private http: HttpClient) {
    this.setPersonasQuantity(16);
    this.fetchPersonas().subscribe(persona => this._personas = persona);
  }

  getApiData(): any {
    return this.http.get(this.API_URL);
  }

  fetchPersonas() {
    return this.http
      .get<any>(this.API_URL)
      .pipe(
        map(persona => persona.results)
      );
  }

  getPersonas(): Observable<Persona[]> {
    return of (this._personas);
  }

  setPersonasQuantity(quantity: number) {
    this.API_URL = this.API_URL + "/?results=" + quantity;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdministradorService {
  private apiUrl = 'http://localhost:3000'; // Cambia la URL si tu backend está en un puerto diferente

  constructor(private http: HttpClient) {}

  validarCredenciales(adminData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validar-credenciales`, adminData);
  }

  cambiarClave(correo: string, nuevaClave: string): Observable<any> {
    const data = {
      Correo: correo,
      Clave: nuevaClave
    };
    return this.http.post<any>(`${this.apiUrl}/cambiar-clave`, data);
  }
}

import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  router = inject(Router);

  private endpointPrefix = environment.apiUrl;

  constructor(private http: HttpClient) {}

  logout = () => {
    this.router.navigateByUrl('/');
  };
}

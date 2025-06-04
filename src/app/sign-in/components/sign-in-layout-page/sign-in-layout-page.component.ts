import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-layout-page',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-layout-page.component.html',
  styleUrl: './sign-in-layout-page.component.scss'
})
export class SignInLayoutPageComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  register() {
    // lógica de cadastro aqui
    alert('Cadastro realizado com sucesso!');
  }
}

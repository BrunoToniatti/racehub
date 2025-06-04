import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-page-layout.component.html',
  styleUrl: './login-page-layout.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LoginPageLayoutComponent {
  constructor(private router: Router) {}

  register(){
    this.router.navigate(['/register'])
    console.log('entrou aqui')
  }
}

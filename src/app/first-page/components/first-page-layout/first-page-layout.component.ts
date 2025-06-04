import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-first-page-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  templateUrl: './first-page-layout.component.html',
  styleUrl: './first-page-layout.component.scss'
})
export class FirstPageLayoutComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './shared/components/header.component';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'E-commerceDemo';
}

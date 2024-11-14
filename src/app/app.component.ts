import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserTableComponent } from "./users-table/users-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consumo-api-KEHR';
  
}

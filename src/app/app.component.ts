import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefasComponentComponent } from './components/tarefas-component/tarefas-component.component';
// import { ClienteComponent } from './components/cliente/cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefasComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}

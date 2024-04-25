import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotasComponent } from './components/rotas/rotas.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nova-rota', component: RotasComponent }
];
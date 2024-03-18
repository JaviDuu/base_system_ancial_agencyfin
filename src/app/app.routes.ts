import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PolizaClienteComponent } from './components/polizaCliente/polizaCliente.component';
import { AltaComponent } from './components/alta/alta.component';
import { EditarComponent } from './components/editar/editar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CobranzaComponent } from './components/cobranza/cobranza.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'polizaCliente', component: PolizaClienteComponent },
  { path: 'alta', component: AltaComponent },
  { path: 'editar', component: EditarComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'cobranza', component: CobranzaComponent },
];

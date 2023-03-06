import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { OlvidarPassComponent } from './pages/olvidar-pass/olvidar-pass.component';
import { VerificarComponent } from './pages/verificar/verificar.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { VerificarreservaComponent } from './pages/verificarreserva/verificarreserva.component';
import { ReservasdosComponent } from './pages/reservasdos/reservasdos.component';
import { HorariodosComponent } from './pages/horariodos/horariodos.component';
import { HorariotresComponent } from './pages/horariotres/horariotres.component';
import { ReservastresComponent } from './pages/reservastres/reservastres.component';
import { HorariocuatroComponent } from './pages/horariocuatro/horariocuatro.component';
import { ReservascuatroComponent } from './pages/reservascuatro/reservascuatro.component';
import { HorariocincoComponent } from './pages/horariocinco/horariocinco.component';
import { ReservascincoComponent } from './pages/reservascinco/reservascinco.component';
import { HorarioseisComponent } from './pages/horarioseis/horarioseis.component';
import { ReservasseisComponent } from './pages/reservasseis/reservasseis.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
{path: 'registro', component: RegistroComponent},
{path: 'login', component: LoginComponent},
{path: 'olvidarpass', component: OlvidarPassComponent},
{path: 'verificar', component: VerificarComponent},
{path: 'reservas', component: ReservasComponent},
{path: 'horario', component: HorarioComponent},
{path: 'contactos', component: ContactosComponent},
{path: 'verificarreserva', component: VerificarreservaComponent},
{path: 'reservasdos', component: ReservasdosComponent},
{path: 'horariodos', component: HorariodosComponent},
{path: 'horariotres', component: HorariotresComponent},
{path: 'reservastres', component: ReservastresComponent},
{path: 'horariocuatro', component: HorariocuatroComponent},
{path: 'reservascuatro', component: ReservascuatroComponent},
{path: 'horariocinco', component: HorariocincoComponent},
{path: 'reservascinco', component: ReservascincoComponent},
{path: 'horarioseis', component: HorarioseisComponent},
{path: 'reservasseis', component: ReservasseisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

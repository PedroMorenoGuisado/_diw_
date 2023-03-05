import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { OlvidarPassComponent } from './pages/olvidar-pass/olvidar-pass.component';
import { VerificarComponent } from './pages/verificar/verificar.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { VerificarreservaComponent } from './pages/verificarreserva/verificarreserva.component';
import { HorariodosComponent } from './pages/horariodos/horariodos.component';
import { HorariotresComponent } from './pages/horariotres/horariotres.component';
import { HorariocuatroComponent } from './pages/horariocuatro/horariocuatro.component';
import { HorariocincoComponent } from './pages/horariocinco/horariocinco.component';
import { HorarioseisComponent } from './pages/horarioseis/horarioseis.component';
import { ReservasdosComponent } from './pages/reservasdos/reservasdos.component';
import { ReservastresComponent } from './pages/reservastres/reservastres.component';
import { ReservascuatroComponent } from './pages/reservascuatro/reservascuatro.component';
import { ReservascincoComponent } from './pages/reservascinco/reservascinco.component';
import { ReservasseisComponent } from './pages/reservasseis/reservasseis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    OlvidarPassComponent,
    VerificarComponent,
    ReservasComponent,
    HorarioComponent,
    ContactosComponent,
    VerificarreservaComponent,
    HorariodosComponent,
    HorariotresComponent,
    HorariocuatroComponent,
    HorariocincoComponent,
    HorarioseisComponent,
    ReservasdosComponent,
    ReservastresComponent,
    ReservascuatroComponent,
    ReservascincoComponent,
    ReservasseisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

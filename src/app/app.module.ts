import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MuralComponent } from './mural/mural.component';
import { MensagensService } from './services/mensagens.service';
import { LoginService } from './services/login.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { EnvioMensagensComponent } from './envio-mensagens/envio-mensagens.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const appRoutes: Routes = [
  {path: '', 
      component: AppComponent,
      canActivate: [AuthGuardService]
  },
  {path: 'login', component: LoginComponent},
  {path: 'inicio', 
      component: MuralComponent,
      //canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MuralComponent,
    EnvioMensagensComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MensagensService, 
    LoginService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }

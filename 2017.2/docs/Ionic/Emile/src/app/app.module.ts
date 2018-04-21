import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisciplinasPage } from '../pages/disciplinas/disciplinas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { UsersProvider } from '../providers/users/users';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { EnvioPage } from '../pages/envio/envio';
import { SairPage } from '../pages/sair/sair';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisciplinasPage,
    EnvioPage,
    SairPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HttpModule,
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisciplinasPage,
    EnvioPage,    
    SairPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}

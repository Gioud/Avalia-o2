import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaPageModule } from '../pages/lista/lista.module';
import { InstitucionalPageModule } from '../pages/institucional/institucional.module';
import { ContatoPageModule } from '../pages/contato/contato.module';

import { ContatoPage } from "../pages/contato/contato";

@NgModule({
  declarations: [
    MyApp,
    HomePage, ContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ListaPageModule,
    InstitucionalPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, ContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

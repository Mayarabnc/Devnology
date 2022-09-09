import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarLinkComponent } from './cadastrar-link/cadastrar-link.component';
import { EditarLinkComponent } from './editar-link/editar-link.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarLinkComponent,
    EditarLinkComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

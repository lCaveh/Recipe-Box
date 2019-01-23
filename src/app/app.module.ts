import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeInfoComponent,
    EditInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

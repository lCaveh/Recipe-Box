import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


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
    BrowserModule,
    FormsModule,
       HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayComponentComponent } from './component/two-way-component/two-way-component.component';
import { EventComponentComponent } from './component/event-component/event-component.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponentComponent } from './component/day3/register-component/register-component.component';
import { StudentsComponentComponent } from './component/day3/students-component/students-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponentComponent,
    EventComponentComponent,
    RegisterComponentComponent,
    StudentsComponentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

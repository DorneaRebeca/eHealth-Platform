import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatCommonModule, MatDialogModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatToolbarModule, MatSnackBarModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatChipsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatCommonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

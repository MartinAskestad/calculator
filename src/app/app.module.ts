import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { grammarProvider, semanticsProvider } from 'src/calculator';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [grammarProvider, semanticsProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

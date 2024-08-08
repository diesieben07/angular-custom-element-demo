import {createApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {createCustomElement} from '@angular/elements';

export async function createElement() {
  const appRef = await createApplication(appConfig);
  const customElement = createCustomElement(AppComponent, {injector: appRef.injector});
  customElements.define('my-custom-element', customElement);
}

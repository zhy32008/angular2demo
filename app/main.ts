import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
// launch an application by bootstrapping its root module during development you're likely to bootstrap the AppModule in  a main.ts file like this one.
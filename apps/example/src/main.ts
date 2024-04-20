import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ExampleAppComponent } from './app/app.component';

bootstrapApplication(ExampleAppComponent, appConfig).catch((err) =>
  console.error(err),
);

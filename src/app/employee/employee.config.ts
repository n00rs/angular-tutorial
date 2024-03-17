import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { router } from "./employee.router";

export const employeeConfig: ApplicationConfig = {
    providers: [provideRouter(router),provideHttpClient()]
  };
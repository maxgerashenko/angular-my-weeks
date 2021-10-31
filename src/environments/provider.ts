import { InjectionToken } from '@angular/core';
import { environment } from './environment';
import { EnviromentInteface } from './interface';

export const ENVIROMENT = new InjectionToken<EnviromentInteface>('env');

export function getEnviroment(): EnviromentInteface {
  return environment;
}

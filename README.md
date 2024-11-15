# ConsumoApiKEHR
## Pasos del proyecto

### Parte 1: Crear el Proyecto Angular
Inicia el proyecto ejecutando `ng new consumo-api-KEHR` y sigue las instrucciones para configurar el proyecto.
![Creando proyecto Angular](/src/img/1.png)
![Creando proyecto Angular](/src/img/2.png)

#### Instalando Angular Material al proyecto
![Creando proyecto Angular](/src/img/3.png)

#### Aceptamos las configuraciones por defecto
![Creando proyecto Angular](/src/img/4.png)

### Parte 2: Crear el Servicio para Consumir la API
Crea un servicio utilizando `ng generate service services/user`. En este servicio, define el método `getUsers` para realizar una solicitud HTTP GET a la URL `https://api.escuelajs.co/api/v1/users` y obtener una lista de usuarios. Este método retornará un observable (`Observable<any[]>`) que emitirá los datos de los usuarios como un arreglo de objetos.

![Creando proyecto Angular](/src/img/5.png)
 

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://api.escuelajs.co/api/v1/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
```


### Parte 3: Configurar HttpClient
Para configurar HttpClient, debemos asegurarnos de que el módulo HttpClientModule esté importado y proporcionado en tu configuración de la aplicación.

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideHttpClient()],
};

```

**provideHttpClient** se utiliza para proporcionar el servicio HttpClient, que permite realizar solicitudes HTTP desde tu aplicación Angular.
Debemos asegurarnos de que este código esté incluido en el archivo de configuración de nuestra aplicación para que HttpClient esté correctamente configurado y podamos utilizarlo en nuestros  servicios y componentes.

### Parte 4: Crear el Componente de la Tabla de Usuarios
Genera el componente `UserListComponent` utilizando `ng generate component UserListComponent`. En el método `ngOnInit` de este componente, llama al método `getUsers` del servicio `UserService` y suscríbete al observable para recibir la lista de usuarios y asignarla a una variable que se pueda mostrar en la plantilla.
![Creando proyecto Angular](/src/img/6.png)

###### Obtenemos los detalles del componente en: https://material.angular.io/

![Creando proyecto Angular](/src/img/7.png)

### Parte 5: Crear la Vista para Mostrar los Datos en una Tabla

##### Agregamos nuestro componente a la vista principal de la aplicación: src\app\app.component.html
```html
<router-outlet></router-outlet>
<h1 style="color: brown; text-align: center;">Usuarios</h1>
<app-users-table></app-users-table>
```

**Finalmente podemos correr nuestra aplicación:** `ng serve`

## Resultados 
![Creando proyecto Angular](/src/img/8.png)

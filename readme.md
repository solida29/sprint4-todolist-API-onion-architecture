# Entrega 4.1: Node REST Service

## Objectius

Aprendre a implementar un servidor amb Express.js per a l'API REST.

## Durada: 10 dies

## Lliurament:

- Crea un sol repositori per a l'exercici, i envia l'URL perquè sigui revisat.

- Documentar l'API de manera clara i concisa, incloent informació sobre les rutes, els paràmetres i les respostes esperades.

- Fes ús de CI (Integració Continua) amb GitHub actions.

- S'ha de treballar sobre el teu propi repositori, en un projecte clonat del projecte typescript-tdd-template. El lliurament es farà mitjançant pull-request al propi repositori.

## Descripció

En aquesta entrega crearem un servidor utilitzant Express.js, per proporcionar servei a l'API REST de la llista de tasques (TODO-LIST), aplicant l'arquitectura hexagonal. Implementarem les funcionalitats següents:

- Afegir una tasca a la llista: Implementarem una ruta i un controlador per permetre als usuaris afegir noves tasques a la seva llista.

- Marcar una tasca com a completada: Crearem una ruta i un controlador per a permetre als usuaris marcar una tasca com a completada.

- Eliminar una tasca de la llista: Implementarem una funcionalitat per eliminar tasques de la llista utilitzant una ruta i un controlador adequats.

- Mostrar la llista de tasques: Crearem una ruta i un controlador per obtenir i mostrar la llista completa de tasques als usuaris.

## Nivell 1

Documenta i adjunta les comprovacions amb una plataforma com Postman o Insomnia al teu projecte.

## Nivell 2

- Inclou un middleware que afegeixi la capçalera Cache-control: no-cache. Habiliti CORS (Cross-Origin Resource Sharing) en les respostes, sigui mitjançant Express o mitjançant un altre middleware.

- Afegeix un middleware retorni un HTTP Status 401 - Unauthorized si la capçalera de la petició no conté autenticació bàsica (usuari/ària i contrasenya).

## Nivell 3

Afegeix testing per comprovar el correcte funcionament de cadascun.

<hr>

## Unión arquitectura

Creación de una Todo List en una API REST con una implementación de Union Architecture o Clean architecture y comprobaciones con ThunderClient.

Aquí la aquitectura del código según Union Architecture

```
src/
├── backend
│   ├── middlewares
│   │    ├── middleware-authentication.ts
│   │    └── middleware-basicAuth.ts
│   ├── load-environments.ts
│   └── serverExpress.ts
├── application
│    └── todoService.ts
├── domain
│   ├── entities
│   │    └── task.ts
│   └── repositories
│   │    └── todoRepository.ts
└── infrastructure
    ├── controllers
    │    └── todoControllers.ts
    ├── routes
    │    └── todoRoutes.ts
    └──todoListArray.ts
```

## Nivel 1

Comprobación en Thunder Client

1. Levantamos el servidor src/backend/serverExpress.ts en localhost: 8000

```bash
npm run start-server
```

2. Ejecutamos la API en Thunder Client

```bash
   http://localhost:8000/todo
```

Y podemos probar los metodos GET, POST, PUT y DELETE:

- GET: para leer todas las tareas
- POST: para subir tareas introducimos solo el campo "title":

```bash
{
  "title": "tarea 1"
}
```

Y nos genera una tarea con:

```sh
[
  {
    "id": 1,
    "title": "tarea 1",
    "completed": false
  }
]
```

- PUT: nos permite pasar la tareda designada por id en el path a true o false según su estado (toggle)

```sh
http://localhost:8000/todo/1
```

Tendríamos:

```sh
[
  {
    "id": 1,
    "title": "tarea 1",
    "completed": true
  }
]
```

- DELETE: nos permite borrar la tareda designada por id:

```sh
http://localhost:8000/todo/1
```

## Nivell 2

- Está el middleware Cache-control: no-cache y el CORS en el servidor.

- Está hecho el middleware JSON web Token con pero falta implemetarlo en las routes/todoRoutes.ts y en el server

- Está también una authentication Basic sin acabar de implementar y testear, en routes/todoRoutes.ts y en el server, ligado al .env-example para password y username

## Nivel 3

...

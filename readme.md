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

## Nivel 1

Implementación de la Arquitectura Hexagonal o Clean Architecture y comprobaciones con Postman.

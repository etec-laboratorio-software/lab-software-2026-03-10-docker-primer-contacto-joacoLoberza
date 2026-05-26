# Proyecto Integrador e-commers + red social.
## Autor
Joaquín Loberza

## Como iniciar proyecto con Docker:
1. En la raíz del proyecto, ejecute esto:
    docker compose up --build
2. Entre a la página mediante el siguiente link:
    http://localhost:5173

### Notas
- Para parar el proyecto (bajar el Docker) ejecute: docker compose down
- Como el forntend de la página no está terminado, agregé un botón azul en la sección home. Este componente hace peticiones al backend (el cual no está expuesto en un puerto). La petición debería hacer se a /user, y esto debería devolver un usuario por defecto que se crea dentro del servidor para mostrarle algún registro en la base de datos.
- Es posible que Docker demore mucho al inicio debido a que especificamente para el paquete sqlite3 se compilan los paquetes de C/C++ en el sistema en vez de descargar los precompilados. Esto se debe a un error con la versión de GLIBC_2.38 que usa SQLite 3 y hace que crashee la app de node.
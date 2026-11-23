# Cambios al Proyecto

Validar globalmente con un pipe y DTO para controlar los datos de creación de tareas. Adaptar el esquema de Mongoose para exigir una estructura y evitar campos no definidos.

Mover la creación de tareas a `TasksService` y reorganizar los módulos para reutilizar `UsersService` desde el módulo de usuarios.

Sustituir el middleware de autenticación por un `AuthGuard`, que ahora protege la creación de tareas mediante el token `Authorization: admin-secret-token`.

Eliminar modelos innecesarios del controlador y actualicé las dependencias con `class-validator`, `class-transformer` y Mongoose.

Añadir transformaciones al DTO para eliminar espacios innecesarios de `title` y `description`.

Básicamente

---
# Proyecto Base — Parcial Práctico Backend (NestJS + MongoDB)

API REST en NestJS y Mongoose para la gestión de **Usuarios (`/users`)** y **Tareas (`/tasks`)**.

---

## Requisitos Previos

- **Node.js** 18+ y **npm**
- **Docker Desktop** (o instancia local de MongoDB en el puerto `27017`)

---

## Instalación y Puesta en Marcha

1. **Levantar la base de datos MongoDB:**
   ```bash
   docker compose up -d
   ```
   *(Si utilizas una instancia local o MongoDB Atlas diferente a `mongodb://localhost:27017/nest-parcial`, configura la variable `MONGODB_URI` en un archivo `.env` tomando como base `.env.example`.)*

2. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación en modo desarrollo:**
   ```bash
   npm run start:dev
   ```
   El servidor quedará disponible en `http://localhost:3000`.

---

## Pruebas y Validación

- **Ejecutar pruebas unitarias:**
  ```bash
  npm test
  ```
- **Ejecutar pruebas end-to-end:**
  ```bash
  npm run test:e2e
  ```
- **Verificar compilación y linter:**
  ```bash
  npm run build
  npm run lint
  ```

---

## Endpoints del Sistema

| Método | Ruta | Acceso | Descripción |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Público | Verificación básica del servidor |
| `POST` | `/users` | Público | Crear usuario (`name`, `email`) |
| `GET` | `/users` | Público | Listar usuarios registrados |
| `GET` | `/users/:id` | Público | Consultar usuario por ID |
| `GET` | `/tasks` | Público | Listar tareas registradas |
| `GET` | `/tasks/:id` | Público | Consultar tarea por ID |
| `POST` | `/tasks` | Restringido (`Authorization: admin-secret-token`) | Crear una tarea asociada a un usuario |

También puedes importar `nest-parcial.postman_collection.json` en Postman o utilizar `requests.http` con la extensión REST Client de VS Code para probar manualmente los endpoints.

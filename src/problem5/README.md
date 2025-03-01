# Problem5

## DEV environment
- NVM 
- Docker
- Node ^22.14.0

Features
- CRUD Operations: Create, Read, Update, and Delete customer resources.
- Validation: Request validation using Joi.
- Global Error Handling: Consistent error responses for all routes.
- Migrations: Manage database schema changes using TypeORM migrations.
- Dockerized: Easy setup and deployment with Docker Compose.
- Security: Helmet for HTTP headers and CORS for cross-origin requests.
- Logging: Morgan for request logging.

## How to Run
- Use specific node version
```
nvm use
```

- Create .env file
```
cp env.example .env
```

- Install package dependencies
```
make package
```

- Start dev server
```
make dev
```

Explore Makefile to find more useful CLI (logs, clean, migrate DB, ...)

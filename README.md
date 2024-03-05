# OxyTrack Turbo Project

Welcome to the OxyTrack Turbo project! This monorepo is built with Turbo Repo, utilizing a robust stack that includes Prisma, Postgres, Express, Node.js, React, and TypeScript across both the frontend and backend, ensuring a strongly typed development environment.

## Features

- **Monorepo Structure**: Organized into `apps/` for frontend/backend applications and `packages/` for shared logic or components.
- **OpenAPI Specification**: Utilizes OpenAPI spec as the source of truth for API design, with auto-generated TypeScript clients using `openapi-typescript` and `openapi-typescript-axios`.
- **Strong Typing**: Both frontend and backend are fully typed, enhancing development experience and code quality.
- **Database Flexibility**: Supports local Postgres setups as well as Docker-based environments for ease of development.
- **Development Workflow**: Integrates tools like Prettier, ESLint, Husky, and lint-staged for code formatting and linting, ensuring code consistency and quality.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8.9.0)
- Docker (for running Postgres in a container)

### Setup Instructions

1. **Clone the Repository**

   Start by cloning this repository to your local machine.

2. **Environment Setup**

   Rename `.example.env` to `.env` in both `apps/backend` and `packages/database`. This is crucial for configuring your environment variables correctly.

3. **Database Configuration**

   Ensure you have a running Postgres database. You can use Docker as mentioned in the scripts section or set up a local instance.

4. **Install Dependencies**

   Run `pnpm install` to install all required dependencies across the monorepo.

5. **Start Development Server**

   To start the development server, run `turbo run dev`.

## Useful Scripts

Defined within the `turbo.json` pipeline, these commands are key to the project's development and deployment processes:

- **Prisma Commands**:

  - `turbo run db:generate`: Generates Prisma client artifacts, essential for interacting with your database in a type-safe manner.
  - `turbo run db:push`: Updates the database schema during development without applying migrations, useful for quick iterations.
  - `turbo run db:migrate`: Applies database migrations, ensuring your database schema matches your Prisma schema.

- **API Contract and Client Generation**:

  - `turbo run build-api-contract`: Bundles the OpenAPI spec and generates TypeScript Axios clients, ensuring frontend and backend communicate over a strongly typed API.

- **Turbo Commands**:
  - `turbo run build`: Compiles the project for production, ensuring all dependencies like Prisma client and API contracts are generated and up-to-date.
  - `turbo run dev`: Starts the development server, watching for changes in your source code and automatically recompiling.

## Project Structure

- `apps/*`: Contains the frontend and backend applications.
- `packages/*`: Includes shared libraries, configurations, and utility functions.

## Additional Resources

- [Turbo Repo Documentation](https://turborepo.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Postgres Docker Setup](https://docs.docker.com/samples/postgresql_service/)

## Contributing

Contributions are welcome! Please follow the established coding conventions and pull request process.

---

Thank you for choosing OxyTrack Turbo Repo for your development needs. Happy coding!

# Estate AI
Monorepo for real estate listing service with AI chat functionality and semantic search.

> **❗ Note:** The project is still in development; some features might not work properly or might not be fully implemented

## Technology stack
Frontend is build using [Next.js](https://nextjs.org/) for better SEO and compatibility with [React](https://react.dev/) components. As for backend, [Fastify](https://fastify.dev/) was used to create lightweight, relatively fast Node.js service. Additionally, NLP service (powered by [camel_tools](https://github.com/CAMeL-Lab/camel_tools)) was needed to perform normalizations on search queries, and [Meilisearch](https://www.meilisearch.com/) to perform the actual search. For the database, [PostgreSQL](https://www.postgresql.org/) was used (through [Supabase](https://supabase.com/)).

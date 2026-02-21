# @identium/api

The backend server for the Identium Identity Layer. Handles identity persistence, ownership claiming, and milestone tracking.

## Features

- **Identity Registry**: Stores agent IDs and personality traits.
- **Ownership Flow**: Securely claim agents using Unique Agent Keys (UAK).
- **PRISMA Powered**: Robust database management with SQLite/PostgreSQL support.
- **Rate Limited**: Built-in production safety.

## Setup

1. Configure `.env`:
   ```env
   DATABASE_URL="file:./dev.db"
   PORT=3000
   ```

2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

3. Start the server:
   ```bash
   npm run start
   ```

## API Endpoints

- `POST /api/identities/genesis`: Create a new identity.
- `GET /api/identities/:id`: Retrieve agent profile.
- `POST /api/claim`: Attach agent to owner.

## License
ISC

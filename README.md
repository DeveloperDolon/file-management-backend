# File management system design flow

**System Architecture**
![System Architecture](System_architecture.jpg)

**Database Design**
![Project Documentation](File_management_database_design.png)

# VaultFS — Backend

> REST API for the VaultFS SaaS File Management System. Built with Express.js, Prisma ORM, PostgreSQL, and Cloudinary.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Default Credentials](#default-credentials)
- [Project Structure](#project-structure)
- [System Architecture](#system-architecture)
- [Database Design](#database-design)
- [Running Locally](#running-locally)
- [All Scripts](#all-scripts)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Subscription Tier Limits](#subscription-tier-limits)

---

## Tech Stack

| Concern | Technology |
|---|---|
| Runtime | Node.js >= 22.x |
| Framework | Express.js v5 |
| Language | TypeScript 5.9 |
| ORM | Prisma v6 + `@prisma/adapter-pg` |
| Database | PostgreSQL >= 15 |
| File Storage | Cloudinary via `multer-storage-cloudinary` |
| Auth | JWT (`jsonwebtoken`) + `bcryptjs` |
| Email | Nodemailer (verification + password reset) |
| Validation | Zod |
| Testing | Vitest + `@vitest/coverage-v8` |
| Linting | ESLint 10 + `typescript-eslint` + `eslint-plugin-perfectionist` |
| Formatting | Prettier |

---

## Default Credentials

> ⚠️ Rotate these before deploying to any public environment.

### Admin Account
| Field | Value |
|---|---|
| Email | `admin@example.com` |
| Password | `AdminPassword123!` |
| Login URL | `POST /api/v1/auth/admin/login` |

### Seeded User Account
| Field | Value |
|---|---|
| Email | `dolonr718@gmail.com` |
| Password | `hello@world` |
| Login URL | `POST /api/v1/auth/login` |

The admin account is created by the Prisma seeder (`prisma/seed.ts`). Run `npx prisma db seed` after your first migration.

---

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma           # Full database schema & relations
│   ├── migrations/             # Auto-generated migration files
│   └── seed.ts                 # Seeds default admin + packages
│
├── src/
│   ├── app/
│   │   ├── errors/
│   │   │   └── ApiError.ts         # Custom HTTP error class
│   │   ├── helpers/
│   │   │   └── packageHelper.ts    # getActivePackage(userId)
│   │   ├── middlewares/
│   │   │   ├── authGuard.ts        # JWT verification + role check
│   │   │   └── validateRequest.ts  # Zod schema middleware
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   └── auth.validation.ts
│   │   │   ├── user/
│   │   │   │   ├── user.controller.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   └── user.routes.ts
│   │   │   ├── admin/
│   │   │   │   ├── admin.controller.ts
│   │   │   │   ├── admin.service.ts
│   │   │   │   └── admin.routes.ts
│   │   │   ├── package/
│   │   │   │   ├── package.controller.ts
│   │   │   │   ├── package.service.ts
│   │   │   │   ├── package.routes.ts
│   │   │   │   └── package.validation.ts
│   │   │   ├── folder/
│   │   │   │   ├── folder.controller.ts
│   │   │   │   ├── folder.service.ts
│   │   │   │   ├── folder.routes.ts
│   │   │   │   ├── folder.interfaces.ts
│   │   │   │   └── folder.validation.ts
│   │   │   └── file/
│   │   │       ├── file.controller.ts
│   │   │       ├── file.service.ts
│   │   │       ├── file.routes.ts
│   │   │       ├── file.upload.ts      # multer + Cloudinary storage
│   │   │       ├── file.interfaces.ts
│   │   │       └── file.validation.ts
│   │   └── shared/
│   │       ├── catchAsync.ts           # Async error wrapper
│   │       └── sendResponse.ts         # Unified response shape
│   ├── config/
│   │   └── prisma.ts               # Prisma client singleton
│   ├── app.ts                      # Express app, CORS, routes
│   └── server.ts                   # HTTP server bootstrap
│
├── .env                            # Local env vars (never commit)
├── .env.example                    # Template for env vars
├── tsconfig.json                   # Dev TypeScript config
├── tsconfig.build.json             # Production build config
├── eslint.config.js
├── .prettierrc
└── package.json
```

---

## System Architecture
![System Architecture](System_architecture.jpg)

### Key Design Decisions

**Centralised package enforcement** — `getActivePackage(userId)` is the single source of truth for all subscription limits. Every `FileService` and `FolderService` method calls it first. This means adding a new limit only requires changing one helper and the `Package` schema row — no hunting across controllers.

**Cloudinary-first, clean-on-failure** — Files are streamed to Cloudinary by `multer-storage-cloudinary` before service logic runs. If any business rule check fails afterward (wrong file type, plan limit hit, folder not found), the service immediately calls `cloudinary.uploader.destroy(uploadedFile.filename)` to avoid orphaned assets.

**Signed download URLs, not proxied streams** — `downloadFile` returns a short-lived Cloudinary signed URL (`sign_url: true`, `expires_at: now + 3600`). The file bytes never travel through the API server, keeping bandwidth costs near zero.

**JWT + role guard** — `authGuard('ADMIN')` is a higher-order middleware that verifies the JWT and asserts `payload.role === 'ADMIN'`. User tokens cannot reach any `/admin/*` route.

---

## Database Design
![Project Documentation](File_management_database_design.png)

  Relationships
─────────────────────────────────────────────────────────────
  User        1 ──► N   Folder         (userId)
  User        1 ──► N   File           (userId)
  User        1 ──► N   UserPackage    (userId)
  Package     1 ──► N   UserPackage    (packageId)
  Folder      1 ──► N   File           (folderId)
  Folder      1 ──► N   Folder         (parentId, self-referential)
```

---

## Running Locally

### Prerequisites

| Tool | Version |
|---|---|
| Node.js | >= 22.x |
| npm | >= 10.x |
| PostgreSQL | >= 15.x |
| Git | any recent |
| Cloudinary account | free tier is enough |

### Step-by-step

```bash
# 1. Clone and enter the backend directory
git clone https://github.com/your-username/vaultfs.git
cd vaultfs/backend

# 2. Install all dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Open .env and fill in every value (see Environment Variables below)

# 4. Create the PostgreSQL database
psql -U postgres -c "CREATE DATABASE vaultfs_db;"

# 5. Run database migrations
npx prisma migrate dev --name init

# 6. Seed the database
#    Creates the default admin account + Free/Silver/Gold/Diamond packages
npx prisma db seed

# 7. Start the development server (hot reload via tsx --watch)
npm run dev
```

The API will be available at **http://localhost:5000**.

---

## All Scripts

```bash
# ── Development ──────────────────────────────────────────
npm run dev            # Start dev server with hot reload (tsx --watch)
npm run type-check     # TypeScript type checking without emitting

# ── Production ──────────────────────────────────────────
npm run build          # Compile TypeScript → dist/ (tsconfig.build.json)
npm run start          # Run compiled dist/server.js

# ── Code Quality ────────────────────────────────────────
npm run lint           # ESLint check
npm run lint:fix       # ESLint with auto-fix
npm run format         # Prettier write
npm run format:check   # Prettier check (CI-friendly)

# ── Testing ─────────────────────────────────────────────
npm test               # Vitest in watch mode
npm run test:run       # Vitest single run (CI-friendly)
npm run test:ui        # Vitest UI (browser-based test viewer)
npm run coverage       # Test coverage report

# ── Database ────────────────────────────────────────────
npx prisma migrate dev --name <name>   # Create and apply a new migration
npx prisma migrate deploy              # Apply migrations in production
npx prisma db seed                     # Run prisma/seed.ts
npx prisma generate                    # Regenerate Prisma Client
npx prisma studio                      # Open Prisma GUI (localhost:5555)
npx prisma migrate reset               # ⚠️ Drop DB, re-migrate, re-seed
```

---

## Environment Variables

Create a `.env` file in the `backend/` root (copy from `.env.example`):

```env
# ── Server ──────────────────────────────────────────────
NODE_ENV=development
PORT=5000

# ── Database ────────────────────────────────────────────
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/vaultfs_db?schema=public"

# ── JWT ─────────────────────────────────────────────────
JWT_ACCESS_SECRET=replace_with_long_random_string
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_SECRET=replace_with_another_long_random_string
JWT_REFRESH_EXPIRES_IN=7d

# ── Cloudinary ──────────────────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ── Email / Nodemailer ──────────────────────────────────
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password
EMAIL_FROM="VaultFS <your_email@gmail.com>"

# ── App ─────────────────────────────────────────────────
CLIENT_URL=http://localhost:5173
```

> **Gmail tip:** Use an [App Password](https://myaccount.google.com/apppasswords), not your regular Gmail password. Two-factor authentication must be enabled on the Google account first.

---

## API Reference

All routes are prefixed with `/api/v1`. Protected routes require `Authorization: Bearer <token>`.

### Auth

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/auth/register` | ✗ | Register new user account |
| `POST` | `/auth/login` | ✗ | User login — returns JWT |
| `POST` | `/auth/admin/login` | ✗ | Admin login — returns JWT |
| `POST` | `/auth/verify-email` | ✗ | Submit OTP to verify email |
| `POST` | `/auth/resend-verification` | ✗ | Resend OTP email |
| `POST` | `/auth/forgot-password` | ✗ | Send password reset email |
| `POST` | `/auth/reset-password` | ✗ | Reset password with token |

### Users

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/users/me` | User | Get own profile |
| `POST` | `/users/subscribe/:packageId` | User | Subscribe to a package |
| `GET` | `/users/package-history` | User | View subscription history |

### Packages

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/packages` | User | List all active packages |
| `POST` | `/packages` | Admin | Create a new package |
| `PATCH` | `/packages/:id` | Admin | Update a package |
| `DELETE` | `/packages/:id` | Admin | Delete a package |

### Folders

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/folders` | User | Create folder (root or nested) |
| `GET` | `/folders` | User | List all root-level folders |
| `GET` | `/folders/:id` | User | Get folder with its children |
| `PATCH` | `/folders/:id` | User | Rename folder |
| `DELETE` | `/folders/:id` | User | Delete folder + all contents |

### Files

| Method | Endpoint | Auth | Body / Notes |
|---|---|---|---|
| `POST` | `/files/upload` | User | `multipart/form-data` — field `file` + `folderId` |
| `GET` | `/files/:id` | User | Get file metadata |
| `PATCH` | `/files/:id` | User | Rename file |
| `DELETE` | `/files/:id` | User | Delete file from DB + Cloudinary |
| `GET` | `/files/:id/download` | User | Redirects to signed Cloudinary URL |

### Admin

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/admin/users` | Admin | List all users |
| `GET` | `/admin/users/:id` | Admin | Get user detail |
| `DELETE` | `/admin/users/:id` | Admin | Delete user |

---

## Subscription Tier Limits

Seeded by `prisma/seed.ts`. The admin can update any value at runtime from the admin panel — no code changes needed.

| Limit | Free | Silver | Gold | Diamond |
|---|---|---|---|---|
| Price | $0/mo | $9/mo | $29/mo | $79/mo |
| Max Folders | 5 | 20 | 100 | Unlimited |
| Max Nesting Level | 1 | 3 | 5 | 10 |
| Allowed File Types | Image | Image, PDF | Image, PDF, Audio | All |
| Max File Size | 5 MB | 25 MB | 100 MB | 500 MB |
| Total File Limit | 20 | 100 | 500 | Unlimited |
| Files Per Folder | 5 | 20 | 50 | Unlimited |

---

## License

ISC © 2026 Dolon Roy
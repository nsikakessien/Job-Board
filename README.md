# Job Posting Website

A modern web application for posting and browsing job listings. Built with Next.js, TypeScript, and Prisma, this project allows users to discover, post, and view job opportunities from top companies.

---

## Features

- **User Authentication:** Secure sign-in and sign-up for job posters and seekers.
- **Post Jobs:** Authenticated users can create new job listings.
- **Browse Jobs:** View all available jobs or filter by company, location, or type.
- **Recent Jobs:** Homepage highlights the latest job postings.
- **Job Details:** View detailed information about each job.
- **Responsive Design:** Fully responsive UI using Tailwind CSS.

---

## Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes
- **Database:** PostgreSQL (configurable), Prisma ORM
- **Authentication:** NextAuth.js (or your preferred provider)
- **Other:** ESLint, Prettier

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/job-posting-website.git
cd job-posting-website
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your database and authentication credentials:

```sh
cp .env.example .env
```

**Example `.env` variables:**

```
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/jobdb
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Set Up the Database

Run Prisma migrations to set up your database schema:

```sh
npx prisma migrate dev
```

(Optional) Generate Prisma client:

```sh
npx prisma generate
```

### 5. Start the Development Server

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
app/
  api/           # API routes (job CRUD, auth, etc.)
  components/    # Reusable React components
  jobs/          # Jobs pages (list, details, post)
  page.tsx       # Home page
lib/
  prisma.ts      # Prisma client instance
prisma/
  schema.prisma  # Prisma schema
public/          # Static assets
.env.example     # Example environment variables
```

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npx prisma studio` — Open Prisma Studio (DB GUI)

---

## Customization

- **Styling:** Modify Tailwind CSS classes or add your own styles in `globals.css`.
- **Database:** Update `prisma/schema.prisma` to change job fields or add new models.
- **Authentication:** Configure providers in `/auth` as needed.

---

## License

MIT

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
-

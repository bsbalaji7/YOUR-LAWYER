# YOUR LAWYER - Legal Assistance Platform

An AI-driven legal knowledge hub that provides comprehensive legal services, case management, and role-based access for users and lawyers.

## Features

- **Role-Based Authentication**: Separate login for Users and Lawyers
- **Legal Dashboard**: Comprehensive dashboard with legal services, law categories, and case management
- **AI Legal Assistant**: Get instant legal guidance (ready for integration)
- **Case Management**: Track active cases, hearing dates, and judgments
- **Complaint System**: File and track legal complaints
- **Legal Resources**: Access to various law categories including Constitutional, Criminal, and Civil law

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase project at https://supabase.com
2. The database tables have already been created through migrations
3. Update the `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the Application

```bash
npm run dev
```

The application will start at http://localhost:5173

## Database Schema

The application uses Supabase with the following tables:

- **profiles**: User profiles with role information (user/lawyer)
- **cases**: Legal cases with assignments and status tracking
- **complaints**: User complaints and their resolution status
- **hearing_dates**: Scheduled court hearings linked to cases

## User Roles

### User Role
- File complaints
- Track case status
- Access legal resources
- Use AI legal assistant
- View hearing dates for their cases

### Lawyer Role
- All user features plus:
- View assigned cases
- Manage client information
- Update case status and hearing dates
- Access lawyer-specific dashboard

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Build Tool**: Vite

## Design

The application uses a professional legal theme with:
- Warm amber and stone color palette
- Scales of justice iconography
- Clean, accessible interface
- Responsive design for all devices
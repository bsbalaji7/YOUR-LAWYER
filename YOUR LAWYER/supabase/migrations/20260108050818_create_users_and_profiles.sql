/*
  # Create Users and Profiles Schema

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `full_name` (text)
      - `role` (text) - 'user' or 'lawyer'
      - `phone` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `cases`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `lawyer_id` (uuid, references profiles, nullable)
      - `case_number` (text)
      - `title` (text)
      - `description` (text)
      - `category` (text) - Constitutional, Criminal, Civil, etc.
      - `status` (text) - Active, Closed, Pending
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `complaints`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `title` (text)
      - `description` (text)
      - `category` (text)
      - `status` (text) - Pending, In Progress, Resolved
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `hearing_dates`
      - `id` (uuid, primary key)
      - `case_id` (uuid, references cases)
      - `hearing_date` (timestamptz)
      - `location` (text)
      - `notes` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Lawyers can view assigned cases
*/

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  role text NOT NULL DEFAULT 'user',
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Cases table
CREATE TABLE IF NOT EXISTS cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  lawyer_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  case_number text UNIQUE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  status text NOT NULL DEFAULT 'Pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own cases"
  ON cases FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR auth.uid() = lawyer_id);

CREATE POLICY "Users can create own cases"
  ON cases FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users and lawyers can update cases"
  ON cases FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id OR auth.uid() = lawyer_id)
  WITH CHECK (auth.uid() = user_id OR auth.uid() = lawyer_id);

-- Complaints table
CREATE TABLE IF NOT EXISTS complaints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  status text NOT NULL DEFAULT 'Pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own complaints"
  ON complaints FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create complaints"
  ON complaints FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own complaints"
  ON complaints FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Hearing dates table
CREATE TABLE IF NOT EXISTS hearing_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id uuid REFERENCES cases(id) ON DELETE CASCADE NOT NULL,
  hearing_date timestamptz NOT NULL,
  location text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hearing_dates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view hearing dates for their cases"
  ON hearing_dates FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM cases
      WHERE cases.id = hearing_dates.case_id
      AND (cases.user_id = auth.uid() OR cases.lawyer_id = auth.uid())
    )
  );

CREATE POLICY "Lawyers can manage hearing dates"
  ON hearing_dates FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM cases
      WHERE cases.id = hearing_dates.case_id
      AND cases.lawyer_id = auth.uid()
    )
  );
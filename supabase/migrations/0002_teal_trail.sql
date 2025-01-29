/*
  # Create test results table

  1. New Tables
    - `test_results`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `result` (jsonb)
      - `category_scores` (jsonb)
      - `answers` (jsonb)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `test_results` table
    - Add policies for users to manage their own test results
*/

CREATE TABLE IF NOT EXISTS test_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  result jsonb NOT NULL,
  category_scores jsonb NOT NULL,
  answers jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own test results
CREATE POLICY "Users can read own test results"
  ON test_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow users to insert their own test results
CREATE POLICY "Users can insert own test results"
  ON test_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own test results
CREATE POLICY "Users can update own test results"
  ON test_results
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);
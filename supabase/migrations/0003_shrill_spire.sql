/*
  # Add Test Results Table

  1. New Tables
    - test_results: Stores user assessment results
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - result (jsonb)
      - category_scores (jsonb) 
      - answers (jsonb)
      - created_at (timestamp)

  2. Security
    - Enable RLS
    - Add policies if they don't exist
*/

-- Create test results table if not exists
DO $$ BEGIN
  CREATE TABLE IF NOT EXISTS test_results (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    result jsonb NOT NULL,
    category_scores jsonb NOT NULL,
    answers jsonb NOT NULL,
    created_at timestamptz DEFAULT now()
  );
EXCEPTION
  WHEN duplicate_table THEN
    NULL;
END $$;

-- Enable RLS
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- Add policies if they don't exist
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'test_results' 
    AND policyname = 'Users can read own test results'
  ) THEN
    CREATE POLICY "Users can read own test results"
      ON test_results
      FOR SELECT
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'test_results' 
    AND policyname = 'Users can insert own test results'
  ) THEN
    CREATE POLICY "Users can insert own test results"
      ON test_results
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'test_results' 
    AND policyname = 'Users can update own test results'
  ) THEN
    CREATE POLICY "Users can update own test results"
      ON test_results
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;
END $$;
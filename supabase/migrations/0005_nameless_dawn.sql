/*
  # Fix test results table

  1. Changes
    - Add unique constraint on user_id and created_at
    - Add index for faster queries
*/

CREATE UNIQUE INDEX IF NOT EXISTS idx_test_results_user_latest 
ON test_results (user_id, created_at DESC);

-- Ensure RLS policies are in place
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- Recreate policies to ensure they exist
DROP POLICY IF EXISTS "Users can read own test results" ON test_results;
DROP POLICY IF EXISTS "Users can insert own test results" ON test_results;

CREATE POLICY "Users can read own test results"
  ON test_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own test results"
  ON test_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
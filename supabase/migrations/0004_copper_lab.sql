-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_test_results_user_id ON test_results(user_id);
CREATE INDEX IF NOT EXISTS idx_test_results_created_at ON test_results(created_at);

-- Add cascade delete when user is deleted
ALTER TABLE test_results 
  DROP CONSTRAINT IF EXISTS test_results_user_id_fkey,
  ADD CONSTRAINT test_results_user_id_fkey 
    FOREIGN KEY (user_id) 
    REFERENCES auth.users(id) 
    ON DELETE CASCADE;
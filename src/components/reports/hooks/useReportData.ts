import { useMemo } from 'react';
import { useTestStore } from '../../../store/testStore';
import { useAuthStore } from '../../../store/authStore';
import { ReportData } from '../../../types/report';

export function useReportData(): { data: ReportData | null; error: string | null } {
  const { result, categoryScores, error: testError } = useTestStore();
  const { user } = useAuthStore();

  const data = useMemo(() => {
    if (!result || !user) return null;

    return {
      result,
      categoryScores,
      userName: user.email || 'User'
    };
  }, [result, categoryScores, user]);

  return { data, error: testError };
}
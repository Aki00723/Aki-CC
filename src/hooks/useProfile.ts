import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createProfile, updateProfile, getProfile } from '../lib/database';

export function useProfile(userId: string) {
  const queryClient = useQueryClient();

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId),
    enabled: !!userId
  });

  const { mutate: create } = useMutation({
    mutationFn: createProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', userId] });
    }
  });

  const { mutate: update } = useMutation({
    mutationFn: (updates: any) => updateProfile(userId, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', userId] });
    }
  });

  return {
    profile,
    isLoading,
    createProfile: create,
    updateProfile: update
  };
}
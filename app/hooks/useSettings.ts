import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSettings,
  updateSettings,
  AllSettingsResponse,
  UpdateSettingsRequest,
} from "@/app/services/settingsService";

const SETTINGS_QUERY_KEY = "settings";

export function useSettings() {
  return useQuery<AllSettingsResponse>({
    queryKey: [SETTINGS_QUERY_KEY],
    queryFn: getSettings,
  });
}

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateSettingsRequest) => updateSettings(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SETTINGS_QUERY_KEY] });
    },
  });
}

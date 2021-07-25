export interface AuthConfig {
  clientId?: string;
  clientSecret?: string;
  token?: RefreshTokenResponse;
}

export interface SummaryAthlete {
  id: number;
  resource_state: number;
  firstname: string;
  lastname: string;
  profile_medium: string;
  profile: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  friend: string;
  follower: string;
  premium: boolean;
  created_at: string;
  updated_at: string;
}
export interface RefreshTokenResponse {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  athlete: SummaryAthlete;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  role: UserRole;
  createdAt: string;
  isVerified: boolean;
}

export type UserRole = 'entrepreneur' | 'supplier' | 'investor';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  role: UserRole;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  agreeToTerms: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}
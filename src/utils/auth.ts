import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { User, UserRole, AuthResponse } from '../types/auth';

// Mock JWT secret - in production, this should be an environment variable
const JWT_SECRET = 'your-super-secret-jwt-key-change-in-production';
const JWT_REFRESH_SECRET = 'your-super-secret-refresh-key-change-in-production';

// Mock user database - in production, this would be a real database
let mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    email: 'entrepreneur@example.com',
    firstName: 'John',
    lastName: 'Entrepreneur',
    company: 'StartupCo',
    role: 'entrepreneur',
    password: '$2a$10$rOzJqKwjKwjKwjKwjKwjKOzJqKwjKwjKwjKwjKwjKOzJqKwjKwjKw', // 'password123'
    createdAt: new Date().toISOString(),
    isVerified: true
  },
  {
    id: '2',
    email: 'supplier@example.com',
    firstName: 'Jane',
    lastName: 'Supplier',
    company: 'SupplyCorp',
    role: 'supplier',
    password: '$2a$10$rOzJqKwjKwjKwjKwjKwjKOzJqKwjKwjKwjKwjKwjKOzJqKwjKwjKw', // 'password123'
    createdAt: new Date().toISOString(),
    isVerified: true
  },
  {
    id: '3',
    email: 'investor@example.com',
    firstName: 'Bob',
    lastName: 'Investor',
    company: 'Investment Fund',
    role: 'investor',
    password: '$2a$10$rOzJqKwjKwjKwjKwjKwjKOzJqKwjKwjKwjKwjKwjKOzJqKwjKwjKw', // 'password123'
    createdAt: new Date().toISOString(),
    isVerified: true
  }
];

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateTokens = (user: User): { token: string; refreshToken: string } => {
  const token = jwt.sign(
    { 
      userId: user.id, 
      email: user.email, 
      role: user.role 
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { token, refreshToken };
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export const setAuthTokens = (token: string, refreshToken: string): void => {
  Cookies.set('auth_token', token, { expires: 1, secure: true, sameSite: 'strict' });
  Cookies.set('refresh_token', refreshToken, { expires: 7, secure: true, sameSite: 'strict' });
};

export const getAuthToken = (): string | undefined => {
  return Cookies.get('auth_token');
};

export const removeAuthTokens = (): void => {
  Cookies.remove('auth_token');
  Cookies.remove('refresh_token');
};

export const authenticateUser = async (email: string, password: string, role: UserRole): Promise<AuthResponse> => {
  const user = mockUsers.find(u => u.email === email && u.role === role);
  
  if (!user) {
    throw new Error('Invalid credentials or role');
  }

  const isValidPassword = await comparePassword(password, user.password);
  
  if (!isValidPassword) {
    throw new Error('Invalid credentials');
  }

  const { password: _, ...userWithoutPassword } = user;
  const tokens = generateTokens(userWithoutPassword);

  return {
    user: userWithoutPassword,
    ...tokens
  };
};

export const registerUser = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  password: string;
  role: UserRole;
}): Promise<AuthResponse> => {
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === userData.email);
  
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  const hashedPassword = await hashPassword(userData.password);
  
  const newUser: User & { password: string } = {
    id: (mockUsers.length + 1).toString(),
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    company: userData.company,
    role: userData.role,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
    isVerified: true
  };

  mockUsers.push(newUser);

  const { password: _, ...userWithoutPassword } = newUser;
  const tokens = generateTokens(userWithoutPassword);

  return {
    user: userWithoutPassword,
    ...tokens
  };
};

export const getCurrentUser = async (): Promise<User | null> => {
  const token = getAuthToken();
  
  if (!token) {
    return null;
  }

  try {
    const decoded = verifyToken(token);
    const user = mockUsers.find(u => u.id === decoded.userId);
    
    if (!user) {
      return null;
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    return null;
  }
};
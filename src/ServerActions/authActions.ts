'use server';
import { signIn, signOut } from '@/auth';

export const login = () => signIn();
export const logout = () => signOut();

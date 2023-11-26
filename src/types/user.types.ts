import { IPaginationParam } from './common-global.types';

export interface ICreateUser {
  full_name?: string;
  email?: string;
  is_administrator?: boolean;
  phone_number?: string;
  password?: string;
  google_id?: string;
  facebook_id?: string;
  profile_image?: string;
  date_of_birth?: string;
}

export interface IUpdateUser {
  full_name?: string;
  email?: string;
  phone_number?: string;
  profile_image?: string;
  date_of_birth?: string;
  status?: string;
}

export interface IChangePassword {
  currentPassword?: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IQueryUser extends IPaginationParam {
  content?: string;
  status?: string;
}

export interface IUser {
  id: number;
  full_name?: string;
  email: string;
  is_administrator?: boolean;
  phone_number?: string;
  password?: string;
  google_id?: string;
  facebook_id?: string;
  profile_image?: string;
  date_of_birth?: string;
  status: string;
  created_at: string;
}

import axios from "axios";
import jwtDecode from "jwt-decode";
import { cfg } from "../config/environment";
import {
  AuthPayload,
  User,
  UserCreate,
  UserLogin,
} from "./type/Type";

const API_URL = cfg.API_URL;

export default class AuthService {
  static async register(data: UserCreate): Promise<User> {
    const response = await axios.post<AuthPayload>(`${API_URL}/auth/register`, data);
    const payload = response.data;
    
    return this.jwtDecodeToSession<User>(payload.tokenAccess);
  }

  static async login(data: UserLogin): Promise<User> {
    const response = await axios.post<AuthPayload>(`${API_URL}/auth/login`, data);
    const payload = response.data;

    return this.jwtDecodeToSession<User>(payload.tokenAccess);
  }

  private static jwtDecodeToSession<T>(tokenAccess: string): Promise<T> {
    sessionStorage.setItem('tokenAccess', tokenAccess);
    return jwtDecode(tokenAccess);
  }
}
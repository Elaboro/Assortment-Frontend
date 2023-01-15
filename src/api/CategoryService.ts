import axios from "axios";
import { cfg } from "../config/environment";
import {
  Category,
  CategoryCreate,
  CategoryUpdate,
} from "./type/Type";

const API_URL = cfg.API_URL;

export default class CategoryService {
  static async create(data: CategoryCreate): Promise<Category> {
    const response = await axios.post<Category>(`${API_URL}/category/create`, data);
    return response.data;
  }

  static async update(data: CategoryUpdate): Promise<Category> {
    const response = await axios.post<Category>(`${API_URL}/category/update`, data);
    return response.data;
  }

  static async getList(): Promise<Category[]> {
    const response = await axios.get<Category[]>(`${API_URL}/category/list`);
    return response.data;
  }
}

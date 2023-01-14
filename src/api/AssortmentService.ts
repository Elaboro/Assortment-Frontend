import axios from "axios";
import {
  Assortment,
  AssortmentCreate,
  AssortmentUpdate,
} from "./type/Type";
import { cfg } from "../config/environment";

const API_URL = cfg.API_URL;

export default class AssortmentService {
  static async getList(): Promise<Assortment[]> {
    const response = await axios.get<Assortment[]>(`${API_URL}/assortment/list`);
    return response.data;
  }

  static async create(data: AssortmentCreate): Promise<Assortment> {
    const response = await axios.post<Assortment>(`${API_URL}/assortment/create`, data);
    return response.data;
  }

  static async update(data: AssortmentUpdate): Promise<Assortment> {
    const response = await axios.post<Assortment>(`${API_URL}/assortment/update`, data);
    return response.data;
  }
}
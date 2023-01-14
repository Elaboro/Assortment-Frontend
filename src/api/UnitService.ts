import axios from "axios";
import { cfg } from "../config/environment";
import {
  Unit,
  UnitCreate,
  UnitUpdate,
} from "./type/Type";

const API_URL = cfg.API_URL;

export default class UnitService {
  static async create(data: UnitCreate): Promise<Unit> {
    const response = await axios.post<Unit>(`${API_URL}/unit/create`, data);
    return response.data;
  }

  static async update(data: UnitUpdate): Promise<Unit> {
    const response = await axios.post<Unit>(`${API_URL}/unit/update`, data);
    return response.data;
  }
}
import { JwtPayload } from "jwt-decode";

export type Assortment = {
  id: string;
  name: string;
  description?: string;
  size?: number;
  price?: number;
  category?: Category[];
  image?: Image[];
  unit?: Unit;
};

export type Category = {
  id: string;
  name: string;
};

export type CategoryWithAssortment = {
  id: string;
  name: string;
  assortment: Assortment[];
};

export type Image = {
  id: string;
  name: string;
};

export type Unit = {
  id: string;
  name: string;
}

export type AssortmentCreate = {
  name: Assortment["name"];
  description?: Assortment["description"];
  size?: Assortment["size"];
  price?: Assortment["price"];
  category?: Array<CategoryCreate["name"]>;
  image?: Assortment["image"];
};

export type CategoryCreate = {
  name: Category["name"];
};

export type AssortmentUpdate = AssortmentCreate & {
  id: Assortment["id"];
};

export type CategoryUpdate = CategoryCreate & {
  id: Category["id"];
};

export type UnitCreate = {
  name: Unit["name"];
};

export type UnitUpdate = UnitCreate & {
  id: Unit["id"];
};

export interface AuthPayload {
  tokenAccess: string;
}

export type User = JwtPayload & {
  name: string;
}

export type UserCreate = {
  name: User["name"];
  password: string;
  password_repeat: string;
};

export type UserLogin = {
  name: User["name"];
  password: UserCreate["password"];
};

import type { Iuser } from "./user";

export interface ItodoList {
  id: string;
  name: string;
  todos?: Itodo[];
}

export interface Itodo {
  id: string;
  title: string;
  finished: boolean;
  updatedAt: string;
  createdAt?: string;
  isFavorite: boolean;
  deadline?: string;
  steps: Istep[];
  members?: Iuser[];
}

export interface Istep {
  id: string;
  title: string;
  completed: boolean;
  deadline?: string;
  responsible?: string;
}

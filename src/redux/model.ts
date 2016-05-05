export type Project = {
  id?: number;
  name: string;
}

export type MenuItem = {
  id: number;
  name: string;
  items?: MenuItem[];
}

export type State = {
  projects?: Project[];
  mainMenuItems?: MenuItem[];
}

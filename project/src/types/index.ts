export interface Tool {
  id: string;
  name: string;
  icon: string;
  description: string;
  shortcut?: string;
}

export interface Character {
  id: string;
  name: string;
  thumbnail: string;
  lastModified: Date;
}

export interface Project {
  id: string;
  name: string;
  character: Character;
  createdAt: Date;
  updatedAt: Date;
}
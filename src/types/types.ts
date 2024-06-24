import { ComponentProps } from "react";

export type PageStatus = 'loading' | 'logged-out' | 'dashboard' | 'add-task';

export type TUserProvider = {
    user: Users
    setUser: (user: Users) => void
    pageStatus: PageStatus
    setPageStatus: (status: PageStatus) => void
    allUsers: Users[]
}

export type TLogInProvider = {
  logIn: LogIn;
  setLogIn: (logIn: LogIn) => void;
  checkLogIn: (userLogIn: LogIn) => void
} 

export type Team = {
  id: number;
  teamName: string;
  teamLeaderId: number;
}

export type Users = {
    id: number;
    username: string;
    email: string;
    name: string;
}

export type UsersAuth = {
  id: number;
  userId: number;
  password: string;
}

export type UsersTeamsLink = {
  id: number;
  teamId: number;
  userId: number;
}

export type Tasks = {
  id: number;
  taskName: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
  isImportant: boolean;
  userCreaterId: number;
}

export type TaskAssignmentLink = {
  id: number;
  userId: number;
  taskId: number;
}

export type Tags = {
  id: number;
  tagName: string;
}

export type TaskTagLink = {
  id: number;
  tagId: number;
  taskId: number;
}

export type Notes = {
  id: number;
  noteTitle: string;
  noteContent: string;
  userId: number;
  taskId: number;
}

export type TaskStatus = 'to-do' | 'doing' | 'done'

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export type UserInput = ComponentProps<"input">

export type LogIn = {
  username: string;
  password: string;
}
import { ComponentProps } from "react";

export type PageStatus = 'loading' | 'logged-out' | 'dashboard' | 'add-task';

export type TUserProvider = {
    user: User
    setUser: (user: User) => void
    pageStatus: PageStatus
    setPageStatus: (status: PageStatus) => void
}

export type Team = {
  id: number;
  teamName: string;
  teamLeaderId: number;
}

export type User = {
    id: number;
    username: string;
    email: string;
    name: string;
}

export type TeamMemberAuth = {
  id: number;
  teamMemberId: number;
  password: string;
}

export type TeamMemberTeamsLink = {
  id: number;
  teamId: number;
  teamMemberId: number;
}

export type Tasks = {
  id: number;
  taskName: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
  isImportant: boolean;
  taskCreater: number;
}

export type TaskAssignmentLink = {
  id: number;
  teamMemberId: number;
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
  teamMemberId: number;
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
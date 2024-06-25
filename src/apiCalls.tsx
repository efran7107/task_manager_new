import {
  Notes,
  Tags,
  TaskAssignmentLink,
  Tasks,
  TaskTagLink,
  Team,
  Users,
  UsersAuth,
  UsersTeamsLink,
} from "./types/types";

const baseUrl = "http://localhost:3000";

const postRequestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}

export const GetRequests = {
  getAllTeams: (): Promise<Team[]> => {
    return fetch(`${baseUrl}/teams`).then((res) => res.json());
  },
  getAllUsers: (): Promise<Users[]> => {
    return fetch(`${baseUrl}/users`).then((res) => res.json());
  },
  getUserByName: (name: string): Promise<Users[]> => {
    return fetch(`${baseUrl}/users?name=${name}`).then( (res) => res.json());
  },
  getUserAuth: (userId: number): Promise<UsersAuth[]> => {
    return fetch(`${baseUrl}/usersAuth?userId=${userId}`).then((res) => res.json());
  },
  getAllUserTeamLinks: (): Promise<UsersTeamsLink[]> => {
    return fetch(`${baseUrl}/usersTeamsLink`).then((res) =>
      res.json()
    );
  },
  getAllTasks: (): Promise<Tasks[]> => {
    return fetch(`${baseUrl}/users`).then((res) => res.json());
  },
  getAllAssignmentLink: (): Promise<TaskAssignmentLink[]> => {
    return fetch(`${baseUrl}/taskAssignmentLink`).then((res) =>
      res.json()
    );
  },
  getAllTags: (): Promise<Tags[]> => {
    return fetch(`${baseUrl}/tags`).then((res) => res.json());
  },
  getAllTaskTagLinks: (): Promise<TaskTagLink[]> => {
    return fetch(`${baseUrl}/taskTagLink`).then((res) => res.json());
  },
  getAllNotes: (): Promise<Notes[]> => {
    return fetch(`${baseUrl}/notes`).then((res) => res.json());
  },
};

export const PostRequests = {
  
  createNewUser: (newUser: Omit<Users, 'id'>): Promise<Users> => {
    return fetch(`${baseUrl}/users`,{...postRequestOptions, body: JSON.stringify(newUser)})
      .then((res) => res.json())
  },
  createUsersAuth: (newUserAuth: Omit<UsersAuth, 'id'>) => {
    return fetch(`${baseUrl}/usersAuth`,{...postRequestOptions, body: JSON.stringify(newUserAuth)})
  }
}

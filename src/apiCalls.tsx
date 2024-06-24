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
    return fetch(`${baseUrl}/teams`).then((response) => response.json());
  },
  getAllUsers: (): Promise<Users[]> => {
    return fetch(`${baseUrl}/users`).then((response) => response.json());
  },
  getUserAuth: (userId: number): Promise<UsersAuth[]> => {
    return fetch(`${baseUrl}/usersAuth?userId=${userId}`).then((response) => response.json());
  },
  getAllUserTeamLinks: (): Promise<UsersTeamsLink[]> => {
    return fetch(`${baseUrl}/usersTeamsLink`).then((response) =>
      response.json()
    );
  },
  getAllTasks: (): Promise<Tasks[]> => {
    return fetch(`${baseUrl}/users`).then((response) => response.json());
  },
  getAllAssignmentLink: (): Promise<TaskAssignmentLink[]> => {
    return fetch(`${baseUrl}/taskAssignmentLink`).then((response) =>
      response.json()
    );
  },
  getAllTags: (): Promise<Tags[]> => {
    return fetch(`${baseUrl}/tags`).then((response) => response.json());
  },
  getAllTaskTagLinks: (): Promise<TaskTagLink[]> => {
    return fetch(`${baseUrl}/taskTagLink`).then((response) => response.json());
  },
  getAllNotes: (): Promise<Notes[]> => {
    return fetch(`${baseUrl}/notes`).then((response) => response.json());
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

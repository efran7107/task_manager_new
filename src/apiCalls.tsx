import { Team } from "./types/types";

const baseUrl = 'http://localhost:3000'

export const GetRequests = {
    getAllTeams: (): Promise<Team[]> => {
        return fetch(`${baseUrl}/teams`).then(response => response.json());
    }
}
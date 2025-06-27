
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const endpoints = {
    projects: `${API_BASE_URL}/projects`,
    spotlightProject: `${API_BASE_URL}/projects/spotlight`,
    experiences: `${API_BASE_URL}/experiences`,
    settings: `${API_BASE_URL}/settings`,
    contact: `${API_BASE_URL}/contact`,
};
import httpClient from "./httpClient";

const API_URL = '/classes';

export const classesService = {
    // Get all classes
    getAllClasses: async () => {
      const response = await httpClient.get(`${API_URL}/all`);
      return response.data;
    },
  
    // Get single class
    getClass: async (id) => {
      const response = await httpClient.get(`/${API_URL}/byId/${id}`);
      return response.data;
    },
  
    // Create new class
    createClass: async (classData) => {
      const response = await httpClient.post(`${API_URL}/create`, classData);
      return response.data;
    },
  
    // Update class
    updateClass: async (classData) => {
      const response = await httpClient.put(`http://localhost:8080/classes/update/${classData.id}`, classData);
      return response.data;
    },
  
    // Delete class
    deleteClass: async (id) => {
      const response = await httpClient.delete(`http://localhost:8080/classes/${id}`);
      return response.data;
    }
  };
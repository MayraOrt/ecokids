import httpClient from "./httpClient";

const API_URL = '/users';
const USER_CLASSES_URL = '/user-classes';

export const studentsService = {
  // Get all students
  getAllStudents: async () => {
    const response = await httpClient.get(`${API_URL}/students`);
    return response.data;
  },

  // Create new student
  createStudent: async (studentData) => {
    const response = await httpClient.post('/register', studentData);
    return response.data;
  },

  // Update student
  updateStudent: async (studentData) => {
    const response = await httpClient.put(`${API_URL}/update/${studentData.id}`, studentData);
    return response.data;
  },

  // Delete student
  deleteStudent: async (id) => {
    const response = await httpClient.delete(`${API_URL}/delete/${id}`);
    return response.data;
  },

  // Assign student to class
  assignClass: async (userId, classId) => {
    const response = await httpClient.post(`${USER_CLASSES_URL}/assign`, { userId, classId });
    return response.data;
  },

  // Remove student from class
  removeFromClass: async (userId, classId) => {
    const response = await httpClient.delete(`${USER_CLASSES_URL}/remove`, { 
      data: { userId, classId }
    });
    return response.data;
  },

  // Update student's class
  updateClass: async (userId, oldClassId, newClassId) => {
    const response = await httpClient.put(`${USER_CLASSES_URL}/update`, {
      userId,
      oldClassId,
      newClassId
    });
    return response.data;
  },

  getClassByStudentId: async (userId) => {
    const response = await httpClient.get(`${USER_CLASSES_URL}/${userId}/class`);
    return response.data;
  }
};
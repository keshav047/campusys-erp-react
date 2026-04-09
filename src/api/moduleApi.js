    import axiosInstance from "./axiosInstance";

export const getModuleById = (moduleId) =>
  axiosInstance.get(`/api/v1/app-modules/${moduleId}`);
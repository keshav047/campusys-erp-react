import axiosInstance from "./axiosInstance";

export const getGroupById = (groupId) => {
  return axiosInstance.get(`/api/v1/groups/${groupId}`);
};
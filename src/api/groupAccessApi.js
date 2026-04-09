import axiosInstance from "./axiosInstance";

export const getAccessiblePages = (groupId, appModuleId) => {

  return axiosInstance.get(
    `/api/v1/group-access/group/${groupId}/module/${appModuleId}/accessible`
  );

};
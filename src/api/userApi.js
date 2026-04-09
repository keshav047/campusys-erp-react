import axiosInstance from "./axiosInstance";

// ================= USERS =================

// ✅ Pagination + userType filter
export const getUsers = (page = 0, size = 50, userType) => {
  let url = `/api/v1/user?page=${page}&size=${size}`;

  // 👉 ye important fix hai
  if (userType) {
    url += `&userType=${userType}`;
  }

  return axiosInstance.get(url);
};

// ✅ Get single user
export const getUserById = (userId) =>
  axiosInstance.get(`/api/v1/user/${userId}`);


// ================= GROUP ACCESS (ADD THIS) =================

// 👉 tumhare JSON ke liye zaroori
export const getGroupAccess = (groupAccessId) =>
  axiosInstance.get(`/api/v1/group-access/${groupAccessId}`);


// ================= GROUPS =================

export const getGroups = () =>
  axiosInstance.get(`/api/v1/groups`);

export const getGroupById = (groupId) =>
  axiosInstance.get(`/api/v1/groups/${groupId}`);

export const createGroup = (data) =>
  axiosInstance.post(`/api/v1/groups`, data);

export const updateGroup = (groupId, data) =>
  axiosInstance.put(`/api/v1/groups/${groupId}`, data);

export const deleteGroup = (groupId) =>
  axiosInstance.delete(`/api/v1/groups/${groupId}`);


// ================= MODULES =================

export const getModules = () =>
  axiosInstance.get("/api/v1/modules");


// ================= MENUS =================

export const getMenusByModule = (moduleId) =>
  axiosInstance.get(`/api/v1/menus?moduleId=${moduleId}`);


// ================= SAVE RIGHTS =================

export const saveMenuRights = (data) =>
  axiosInstance.post("/api/v1/menu-rights", data);
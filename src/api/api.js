import axiosInstance from "./axiosInstance";

// ================= USERS =================
export const getUsers = (page = 0, size = 50, userType) => {
  let url = `/api/v1/user?page=${page}&size=${size}`;
  if (userType) url += `&userType=${userType}`;
  return axiosInstance.get(url);
};

// ================= MODULES =================

// 🔥 try both endpoints (fallback logic)
export const getModules = async () => {
  try {
    const res = await axiosInstance.get(`/api/v1/modules`);
    return res;
  } catch (err) {
    console.log("modules failed, trying app-modules...");
    return axiosInstance.get(`/api/v1/app-modules`);
  }
};

// 🔥 single module
export const getModuleById = (moduleId) =>
  axiosInstance.get(`/api/v1/app-modules/${moduleId}`);


// ================= MENUS =================

export const getMenusByModule = (moduleId) =>
  axiosInstance.get(`/api/v1/menus?moduleId=${moduleId}`);


// ================= ROLES =================

export const createRole = (data) =>
  axiosInstance.post(`/api/v1/roles`, data);


// ================= MENU RIGHTS =================

export const saveMenuRights = (data) =>
  axiosInstance.post(`/api/v1/menu-rights`, data);
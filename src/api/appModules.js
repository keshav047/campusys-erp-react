import axiosInstance from "./axiosInstance";

export const getEmployeeUsersPage = () =>
  axiosInstance.get(
    "/api/v1/app-modules/e96f8bfb-6022-40ce-869a-8e003354c43c"
  );
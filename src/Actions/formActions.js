import { axiosInstance } from "../Utils/axiosHelper";

export const getFromConfig = async () => {
  let response = await axiosInstance.get("/forms/dynamicformsdata");

  return response.data;
};

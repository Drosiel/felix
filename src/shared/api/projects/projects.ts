import { AxiosResponse } from "axios";
import { Axios } from "../../../service/axios";
import { Project } from "./models";

const PROJECTS_BASE_PATCH = "/projects";

export const getProjectsList = async (): Promise<Project[] | undefined> => {
  try {
    const { data, status }: AxiosResponse<Project[]> = await Axios.get(
      PROJECTS_BASE_PATCH
    );

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }
};

export const getCurrentProject = async (
  id: string
): Promise<Project | undefined> => {
  try {
    const { data, status }: AxiosResponse<Project> = await Axios.get(
      `${PROJECTS_BASE_PATCH}/${id}`
    );

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }
};

export const addNewProject = async (): Promise<Project | undefined> => {
  try {
    const { data, status }: AxiosResponse<Project> = await Axios.post(
      PROJECTS_BASE_PATCH
    );
    if (status === 201) {
      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }
};

export const deleteProject = async (
  id: string
): Promise<string | undefined> => {
  try {
    const { status, data }: AxiosResponse<Project> = await Axios.delete(
      `${PROJECTS_BASE_PATCH}/${id}`
    );
    if (status === 200) {
      return id;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }
};

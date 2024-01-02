import { createContext, useState } from "react";

export const ManagementContext = createContext({
  projectsArray: [],
  selectedProject: 0,
});

export default function ManagementContextProvider({ children }) {
  const [appState, setAppState] = useState({
    projectsArray: [],
    selectedProject: 0,
  });

  function handleShowCreatePage() {
    setAppState((prevState) => {
      return { ...prevState, selectedProject: undefined };
    });
  }

  function handleShowNoProject() {
    setAppState((prevState) => {
      return { ...prevState, selectedProject: 0 };
    });
  }

  function handleSaveProject(newProject) {
    const projectsCopy = [...appState.projectsArray];
    setAppState((prevState) => {
      return { ...prevState, projectsArray: [...projectsCopy, newProject] };
    });
  }

  function handleShowProject(id) {
    setAppState((prevState) => {
      return { ...prevState, selectedProject: id };
    });
  }

  function handleFindProject() {
    const projectsCopy = [...appState.projectsArray];
    const project = projectsCopy.find(
      (project) => project.id === appState.selectedProject
    );
    return project;
  }

  function handleDeleteProject(curProject) {
    const copyProjectArray = [...appState.projectsArray];
    const modifiedProjectArray = copyProjectArray.filter(
      (project) => project.id !== curProject.id
    );
    setAppState((prevState) => {
      return {
        ...prevState,
        projectsArray: modifiedProjectArray,
        selectedProject: 0,
      };
    });
  }

  function handleCreateTask(taskObj, targetProject) {
    const projectsCopy = [...appState.projectsArray];
    const indexOfProject = projectsCopy.findIndex(
      (project) => project.id === targetProject.id
    );
    projectsCopy[indexOfProject].tasks.push(taskObj);
    setAppState((prevState) => {
      return {
        ...prevState,
        projectsArray: projectsCopy,
      };
    });
  }

  function handleClearTask(taskId, targetProject) {
    const projectsCopy = [...appState.projectsArray];
    const indexOfProject = projectsCopy.findIndex(
      (project) => project.id === targetProject
    );
    const newTaskArray = projectsCopy[indexOfProject].tasks.filter(
      (task) => task.id !== taskId
    );
    projectsCopy[indexOfProject]["tasks"] = newTaskArray;
    setAppState((prevState) => {
      return {
        ...prevState,
        projectsArray: projectsCopy,
      };
    });
  }

  const ctxValue = {
    projectsArray: appState.projectsArray,
    contentPageState: appState.selectedProject,
    ShowCreatePage: handleShowCreatePage,
    ShowNoProject: handleShowNoProject,
    SaveProject: handleSaveProject,
    ShowProject: handleShowProject,
    FindProject: handleFindProject,
    DeleteProject: handleDeleteProject,
    CreateTask: handleCreateTask,
    DeleteTask: handleClearTask,
  };

  return (
    <ManagementContext.Provider value={ctxValue}>
      {children}
    </ManagementContext.Provider>
  );
}

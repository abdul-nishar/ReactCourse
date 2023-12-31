import { useState } from "react";

import ViewProjects from "../components/ViewProjects";
import EmptyContentArea from "../components/EmptyContentArea";
import CreateProject from "../components/CreateProject";
import ShowProject from "../components/ShowProject";

function App() {
  const [showContent, setShowContent] = useState("NoProject");
  const [projectsArray, setProjectsArray] = useState([]);
  const [curProject, setCurProject] = useState();

  const UI = () => {
    switch (showContent) {
      case "CreateProject":
        return (
          <CreateProject
            onHide={handleHideCreateProject}
            onSave={handleSaveProject}
          />
        );
      case "NoProject":
        return <EmptyContentArea onShow={handleShowCreateProject} />;
      case "ShowProject":
        return (
          <ShowProject
            project={handleFindProject()}
            deleteProject={(project) => {
              handleDeleteProject(project);
              handleHideCreateProject();
            }}
            createTask={(taskObj, project) =>
              handleCreateTask(taskObj, project)
            }
            clearTask={(id, projectId) => handleClearTask(id, projectId)}
          />
        );
      default:
        return <div>Unknown</div>;
    }
  };

  function handleShowCreateProject() {
    setShowContent("CreateProject");
  }

  function handleHideCreateProject() {
    setShowContent("NoProject");
  }

  function handleSaveProject(newProject) {
    setProjectsArray((prevProjects) => [...prevProjects, newProject]);
  }

  function handleShowProject() {
    setShowContent("ShowProject");
  }

  function handleSetCurProject(key) {
    setCurProject(key);
  }

  function handleFindProject() {
    const projectsCopy = [...projectsArray];
    const project = projectsCopy.find((project) => project.id === curProject);
    return project;
  }

  function handleDeleteProject(curProject) {
    const copyProjectArray = [...projectsArray];
    const modifiedProjectArray = copyProjectArray.filter(
      (project) => project.id !== curProject.id
    );
    setProjectsArray(modifiedProjectArray);
  }

  function handleCreateTask(taskObj, targetProject) {
    const projectsCopy = [...projectsArray];
    const indexOfProject = projectsCopy.findIndex(
      (project) => project.id === targetProject.id
    );
    projectsCopy[indexOfProject].tasks.push(taskObj);
    setProjectsArray(projectsCopy);
  }

  function handleClearTask(taskId, targetProject) {
    const projectsCopy = [...projectsArray];
    const indexOfProject = projectsCopy.findIndex(
      (project) => project.id === targetProject
    );
    const newTaskArray = projectsCopy[indexOfProject].tasks.filter(
      (task) => task.id !== taskId
    );
    projectsCopy[indexOfProject]["tasks"] = newTaskArray;
    setProjectsArray(projectsCopy);
  }

  return (
    <div className="flex items-stretch">
      <ViewProjects
        onShow={handleShowCreateProject}
        projects={projectsArray}
        onSelect={(id) => {
          handleSetCurProject(id);
          handleShowProject();
        }}
      />
      {UI()}
    </div>
  );
}

export default App;

import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import ProjectFallback from "./components/ProjectFallback";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = (projectData) => {
    const newProject = { ...projectData, id: Math.random() };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          onSelectProject={handleSelectProject}
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
        />
        {projectsState.selectedProjectId && (
          <SelectedProject project={selectedProject} />
        )}

        {projectsState.selectedProjectId === null && (
          <NewProject
            onAdd={handleAddProject}
            onCancel={handleCancelAddProject}
          />
        )}
        {projectsState.selectedProjectId === undefined && (
          <ProjectFallback onStartAddProject={handleStartAddProject} />
        )}
      </main>
    </>
  );
}

export default App;

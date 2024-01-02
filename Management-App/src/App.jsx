import ManagementContextProvider from "../store/management-context";
import ViewProjects from "../components/ViewProjects";
import CreateContent from "../components/createContent";

function App() {
  return (
    <ManagementContextProvider>
      <div className="flex items-stretch">
        <ViewProjects />
        <CreateContent />
      </div>
    </ManagementContextProvider>
  );
}

export default App;

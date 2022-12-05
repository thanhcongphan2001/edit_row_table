import "./App.scss";
import Sidebarleft from "./component/Sibarleft";
import EditTable from "./component/Edittable";
import { ProSidebarProvider } from "react-pro-sidebar";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <div>
      <Container fluid>
        <ProSidebarProvider>
          <Sidebarleft />
        </ProSidebarProvider>
      </Container>
    </div>
  );
}

export default App;

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { FaBars } from "react-icons/fa";
import EditTable from "./Edittable";
function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (

          <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem> React Pro Side Bar</MenuItem>
          <MenuItem> Update</MenuItem>
          <MenuItem> Delete</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{width:"100%"}}>
        <div
          onClick={() => collapseSidebar()}
          style={{
            fontSize: "20px",
            cursor: "pointer",
            height:"40px",
        
            lineHeight: "40px"
          }}
        >
          {" "}
          <i>
            <FaBars />
          </i>
        </div>
        <EditTable/>
      </main>
    </div>
     
  
  );
}
export default Layout;

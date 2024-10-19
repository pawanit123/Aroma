/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// Filename - App.js

import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import Overview from "./Overview";
import About from "./components/Pages/About";
import Navbar from'./components/Navbar/Navbar'
import Gallery from "./components/Pages/Gallery";



function App() {
	return (
		<div className="bg-slate-900">
<Navbar/> 

			<BrowserRouter>
				<div className="flex ml-[35rem] text-2xl">
					<div style={{ margin: "-70px" }}>
						<NavLink
							to="/"
							style={({ isActive }) => ({
								color: isActive
									? "greenyellow"
									: "white",
							})}
						>
							Overview
						</NavLink>
					</div>
					<div className="m-[-70px] ml-[10rem]">
						<NavLink
							to="/About"
							style={({ isActive }) => ({
								color: isActive
									? "greenyellow"
									: "white",
							})}
						>
							About
						</NavLink>
					</div>
          <div className="m-[-70px] ml-[10rem]">
						<NavLink
							to="/Gallery"
							style={({ isActive }) => ({
								color: isActive
									? "greenyellow"
									: "white",
							})}
						>
							Gallery
						</NavLink>
					</div>
				
				</div> 
				<Routes>
					<Route
						exact
						path="/"
						element={<Overview />}
					/>
					<Route
						exact
						path="/About"
						element={<About/>}
					/>		
          <Route
						exact
						path="/Gallery"
						element={<Gallery/>}
					/>	
				
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

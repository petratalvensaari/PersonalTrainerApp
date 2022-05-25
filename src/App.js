import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Calendar from "./components/Calendar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Navigator />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/Customers" component={Customerlist} />
						<Route path="/Trainings" component={Traininglist} />
						<Route path="/Calendar" component={Calendar} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
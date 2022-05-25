
const Etusivu = () => {
	return (
		<div className="container py-5">
			<center><h1>Welcome to the page</h1></center>
			<p>
				<div>
			<BrowserRouter>
					<Routes>
						<Route exact path="/components/" element={<Home />} />
						<Route exact path="/Trainings" element={<Trainings />} />
						<Route exact path="/components/Customers" element={<Customers />} />
					</Routes>
					<center>
            <Link to="/">Home</Link>{' '}
            <Link to="/components/Customers">Customers</Link>{' '} 
			<Link to="/Trainings">Trainings</Link>{' '} </center>
			</BrowserRouter>
		</div>
			</p>
		</div>
	);
};

export default Etusivu;
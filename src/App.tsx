import FlavnoidsTable from "./components/FlavnoidsTable";
import GammaTable from "./components/GammaTable";

import data from "./services/Wine-Data.json";

function App() {
	return (
		<div>
			<FlavnoidsTable items={data} />
			<GammaTable items={data} />
		</div>
	);
}

export default App;

import { useState } from 'react';
import './App.css';

// type People = {
//   name: string,
//   avatar: string,
//   age: number,
//   note?: string
// }

interface IState {
	people: {
		name: string;
		avatar: string;
		age: number;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState["people"]>([]);

	return (
		<div className='App'>
			<h1>People Invited to my Part</h1>
		</div>
	);
}

export default App;

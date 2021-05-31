import { useState } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';

import './App.css';

export interface IState {
	people: {
		name: string;
		avatar: string;
		age: number;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState['people']>([
		{
			name: 'Chad',
			avatar: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
			age: 30,
			note: 'first one',
		},
		{
			name: 'John',
			avatar:
				'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
			age: 29,
			note: 'second one',
		},
	]);

	// const addToPeople = (person: IState['person']) => {
	// 	setPeople((people) => [...people]);
	// };

	return (
		<div className='App'>
			<h1>People Invited to my Part</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;

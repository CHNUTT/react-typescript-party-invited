interface IProps {
	people: {
		name: string;
		avatar: string;
		age: number;
		note?: string;
	}[];
}

const List: React.FC<IProps> = ({ people }) => {
	const renderList = (): JSX.Element[] =>
		people.map((person) => (
			<li className='List'>
				<div className='List-header'>
					<img className='List-img' src={person.avatar} alt={person.name} />
					<h2>{person.name}</h2>
				</div>
				<p>{person.age}</p>
				<p className='List-note'>{person.note}</p>
			</li>
		));

	return <ul>{renderList()}</ul>;
};

export default List;

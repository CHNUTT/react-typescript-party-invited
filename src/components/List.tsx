import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {
	const renderList = (): JSX.Element[] =>
		people.map((person, index) => (
			<li key={index} className='List'>
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

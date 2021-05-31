interface IProps {
	people: {
		name: string;
		avatar: string;
		age: number;
		note?: string;
	}[];
}

const List: React.FC<IProps> = ({ people }) => {
	return <div>I am a List</div>;
};

export default List;

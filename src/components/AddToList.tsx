import React, { FC, ChangeEvent, Dispatch, useState } from 'react';
import { IState as ISProps } from '../App';

interface IProps {
	people: ISProps['people'];
	setPeople: Dispatch<React.SetStateAction<ISProps['people']>>;
}

const AddToList: FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		age: 0,
		note: '',
		avatar: '',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnClick = (): void => {
		console.log(input);
		if (!input.name || !input.age || Number(input.age) <= 0 || !input.avatar)
			return;

		console.log('set people');

		setPeople([
			...people,
			{
				name: input.name,
				age: +input.age,
				avatar: input.avatar,
				note: input.note,
			},
		]);
		setInput({ name: '', age: 0, note: '', avatar: '' });
	};

	return (
		<div className='AddToList'>
			<input
				name='name'
				type='text'
				placeholder='Name'
				className='AddToList-input'
				value={input.name}
				onChange={handleChange}
			/>
			<input
				name='age'
				type='number'
				placeholder='Age'
				className='AddToList-input'
				value={input.age}
				onChange={handleChange}
			/>
			<input
				name='avatar'
				type='text'
				placeholder='Avatar'
				className='AddToList-input'
				value={input.avatar}
				onChange={handleChange}
			/>
			<textarea
				name='note'
				placeholder='Note'
				className='AddToList-input'
				value={input.note}
				onChange={handleChange}
			/>
			<button className='AddToList-btn' onClick={handleOnClick}>
				Add To List
			</button>
		</div>
	);
};
export default AddToList;

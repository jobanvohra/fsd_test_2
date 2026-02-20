import { useEffect, useState } from 'react';
import Input from './Input';

export default function SearchUser() {
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		//fetch
	}, [searchValue]);

	return (
		<div>
			<Input
				placeholder="Search by id"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
		</div>
	);
}

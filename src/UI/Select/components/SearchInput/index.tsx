import React, { Dispatch, SetStateAction } from 'react'
import { SelectProps } from '../../types.ts'
import { SearchInput_, SearchInputWrapper_ } from './styles.tsx'
import { Search } from '../../../../icons/Search.tsx'

interface SearchInputProps extends Pick<SelectProps, 'onSearch'> {
	setSearchText: Dispatch<SetStateAction<string>>
	searchText: string
}

export const SearchInput: React.FC<SearchInputProps> = ({
	onSearch,
	setSearchText,
	searchText,
}) => {
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value
		setSearchText(query)
		if (onSearch) {
			onSearch(query)
		}
	}

	return (
		<SearchInputWrapper_>
			<SearchInput_
				type="text"
				value={searchText}
				onChange={handleSearch}
				placeholder="Search..."
			/>
			<Search />
		</SearchInputWrapper_>
	)
}

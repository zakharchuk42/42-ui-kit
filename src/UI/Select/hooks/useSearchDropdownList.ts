import { useState } from 'react'
import { SelectProps } from '../types.ts'

interface SearchDropdownListProps extends Pick<SelectProps, 'options'> {}

export const useSearchDropdownList = ({ options }: SearchDropdownListProps) => {
	const [searchText, setSearchText] = useState('')

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchText.toLowerCase()),
	)
	return {
		filteredOptions,
		setSearchText,
		searchText,
	}
}

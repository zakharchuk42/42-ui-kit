import React from 'react'
import { MultiInputItem_, MultiInputWrapper_, MultiPlaceholder_ } from './styles.tsx'
import { SelectOption, SelectProps } from '../../types.ts'

interface MultiInputProps extends Pick<SelectProps, 'placeholder'> {
	selected: SelectOption[]
	handleRemoveSelectedOption: (option: SelectOption) => void
}

export const MultiInput: React.FC<MultiInputProps> = ({
	selected,
	placeholder,
	handleRemoveSelectedOption,
}) => {
	if (selected.length === 0) {
		return <MultiPlaceholder_>{placeholder}</MultiPlaceholder_>
	}

	const removeItem = (e: React.MouseEvent<HTMLDivElement>, item: SelectOption) => {
		e.stopPropagation()
		handleRemoveSelectedOption(item)
	}

	return (
		<MultiInputWrapper_>
			{selected.map((item) => {
				return (
					<MultiInputItem_
						key={item.value}
						onClick={(e) => removeItem(e, item)}
					>
						{item.label}
					</MultiInputItem_>
				)
			})}
		</MultiInputWrapper_>
	)
}

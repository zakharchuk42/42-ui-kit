import React, { ReactNode, useRef } from 'react'
import { SelectDropdown_, SelectDropdownWrapper_ } from './styles.tsx'
import { SelectOption, SelectProps } from '../../types.ts'

interface SelectDropdownProps extends Pick<SelectProps, 'options'> {
	onSelect: (option: SelectOption) => void
	selected: SelectOption[] | []
	options: SelectOption[]
	children?: ReactNode
	listHeight: number
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
	options,
	onSelect,
	selected,
	children,
	listHeight,
}) => {
	const dropdownRef = useRef<HTMLDivElement | null>(null)

	const checkIsSelected = (option: SelectOption) => {
		if (selected.length > 0) {
			return selected.some((s) => s.value === option.value)
		}
		return false
	}

	const handleSelect = (isDisable: boolean | undefined, option: SelectOption) => {
		if (isDisable) return
		onSelect(option)
	}

	return (
		<SelectDropdownWrapper_ ref={dropdownRef} $listHeight={listHeight}>
			{children}
			{options.map((option) => {
				return (
					<SelectDropdown_
						key={option.value}
						onClick={() => handleSelect(option.disabled, option)}
						selected={checkIsSelected(option)}
						disabled={option.disabled}
					>
						{option.label}
					</SelectDropdown_>
				)
			})}
		</SelectDropdownWrapper_>
	)
}

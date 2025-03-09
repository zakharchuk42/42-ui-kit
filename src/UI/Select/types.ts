import React from 'react'

export interface SelectOption {
	value: string
	label: string
	disabled?: boolean
}

export interface SelectProps {
	disabled?: boolean
	loading?: boolean
	size?: 'default' | 'small'
	placeholder?: string
	className?: string
	onChange?: (option: SelectOption | SelectOption[] | []) => void
	multi?: boolean
	style?: React.CSSProperties
	options: SelectOption[]
	defaultValue?: string
	allowClear?: boolean
	onSearch?: (option: string) => void
	showSearch?: boolean
	listHeight?: number
	onOpen?: VoidFunction
	onClose?: VoidFunction
}

import React, { useEffect, useRef, useState } from 'react'
import { SelectOption, SelectProps } from '../types.ts'

interface SelectHandlersProps
	extends Pick<
		SelectProps,
		'onChange' | 'defaultValue' | 'options' | 'multi' | 'onOpen' | 'onClose'
	> {}

export const useSelectHandlers = ({
	onChange,
	defaultValue,
	options,
	multi,
	onClose,
	onOpen,
}: SelectHandlersProps) => {
	const [selected, setSelected] = useState<SelectOption[] | []>([])
	const [isOpen, setIsOpen] = useState(false)

	const selectRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
				closeDropdown()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const toggleDropdown = () => {
		setIsOpen((prev) => {
			const newIsOpen = !prev
			if (newIsOpen && onOpen) {
				onOpen()
			} else if (!newIsOpen && onClose) {
				onClose()
			}
			return newIsOpen
		})
	}

	const closeDropdown = () => {
		setIsOpen(false)
		if (onClose) onClose()
	}

	useEffect(() => {
		if (defaultValue) {
			const selectedOption = options.find((option) => {
				if (option.disabled) return

				return option.value === defaultValue
			})
			if (selectedOption) {
				handleSelect(selectedOption)
			}
		}
	}, [])

	const handleSelect = (option: SelectOption) => {
		if (multi) {
			setSelected((prevSelected) => {
				const isAlreadySelected = prevSelected.some(
					(item) => item.value === option.value,
				)
				if (isAlreadySelected) {
					return prevSelected.filter((item) => item.value !== option.value)
				}

				if (onChange) onChange([...prevSelected, option])
				return [...prevSelected, option]
			})
		} else {
			setSelected([option])
			closeDropdown()
			if (onChange) onChange(option)
		}
	}

	const handleRemoveSelectedOption = (option: SelectOption) => {
		setSelected((prevSelected) => {
			const isAlreadySelected = prevSelected.some(
				(item) => item.value === option.value,
			)

			if (isAlreadySelected) {
				const updatedSelected = prevSelected.filter(
					(item) => item.value !== option.value,
				)
				if (onChange) onChange(updatedSelected)
				return updatedSelected
			}

			return prevSelected
		})
	}

	const handleClear = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation()
		setSelected([])
		closeDropdown()
		if (onChange) onChange([])
	}

	return {
		isOpen,
		selectRef,
		toggleDropdown,
		selected,
		handleSelect,
		handleClear,
		handleRemoveSelectedOption,
	}
}

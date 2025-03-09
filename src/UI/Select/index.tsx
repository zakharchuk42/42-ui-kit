import React from 'react'
import { IconWrapper_, SelectInput_, SelectWrapper_, SingleInput_ } from './styles.tsx'
import { SelectDropdown } from './components/SelectDropdown'
import { SelectProps } from './types.ts'
import { getIcon } from './utils/getIcon.tsx'
import { useSelectHandlers } from './hooks/useSelectHandlers.ts'
import { MultiInput } from './components/MultiInput'
import { SearchInput } from './components/SearchInput'
import { useSearchDropdownList } from './hooks/useSearchDropdownList.ts'

export const Select: React.FC<SelectProps> = ({
	defaultValue,
	disabled,
	loading,
	size,
	className,
	onChange,
	multi,
	placeholder,
	options,
	style,
	allowClear,
	onSearch,
	showSearch,
	listHeight = 250,
	onOpen,
	onClose,
}) => {
	const {
		selected,
		handleClear,
		handleSelect,
		handleRemoveSelectedOption,
		isOpen,
		toggleDropdown,
		selectRef,
	} = useSelectHandlers({
		onChange,
		defaultValue,
		options,
		multi,
		onOpen,
		onClose,
	})

	const { filteredOptions, setSearchText, searchText } = useSearchDropdownList({
		options,
	})

	return (
		<SelectWrapper_ className={className} style={style} ref={selectRef} size={size}>
			<SelectInput_
				selected={selected.length === 0}
				onClick={toggleDropdown}
				disabled={disabled || loading}
			>
				{multi ? (
					<MultiInput
						selected={selected}
						placeholder={placeholder}
						handleRemoveSelectedOption={handleRemoveSelectedOption}
					/>
				) : (
					<SingleInput_>{selected[0]?.label || placeholder}</SingleInput_>
				)}
				<IconWrapper_
					onClick={allowClear && !!selected.length ? handleClear : undefined}
				>
					{getIcon({ loading, allowClear, selected: !!selected.length })}
				</IconWrapper_>
			</SelectInput_>
			{isOpen && (
				<SelectDropdown
					options={filteredOptions}
					onSelect={handleSelect}
					selected={selected}
					listHeight={listHeight}
				>
					{showSearch && (
						<SearchInput
							onSearch={onSearch}
							setSearchText={setSearchText}
							searchText={searchText}
						/>
					)}
				</SelectDropdown>
			)}
		</SelectWrapper_>
	)
}

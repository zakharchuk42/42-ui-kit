import { Meta, StoryObj } from '@storybook/react'
import { Select } from './index.tsx'
import { SelectOption } from './types'

const meta: Meta<typeof Select> = {
	component: Select,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Select>

const options: SelectOption[] = [
	{ value: 'Ava Swift', label: 'Ava Swift' },
	{ value: 'Cole Reed', label: 'Cole Reed' },
	{ value: 'Mia Blake', label: 'Mia Blake' },
	{ value: 'Jake Stone', label: 'Jake Stone' },
	{ value: 'Lily Lane', label: 'Lily Lane' },
	{ value: 'Ryan Chase', label: 'Ryan Chase' },
	{ value: 'Zoe Fox', label: 'Zoe Fox' },
	{ value: 'Alex Grey', label: 'Alex Grey' },
	{ value: 'Elle Blair', label: 'Elle Blair' },
]

export const Default: Story = {
	args: {
		placeholder: 'Select...',
		options: options,
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Select...',
		options: options,
	},
}

export const Loading: Story = {
	args: {
		loading: true,
		placeholder: 'Select...',
		options: options,
	},
}

export const Small: Story = {
	args: {
		size: 'small',
		placeholder: 'Select...',
		options: options,
	},
}

export const Multi: Story = {
	args: {
		multi: true,
		placeholder: 'Select...',
		options: options,
	},
}

export const WithDefaultValue: Story = {
	args: {
		defaultValue: 'Ava Swift',
		placeholder: 'Select...',
		options: options,
	},
}

export const AllowClear: Story = {
	args: {
		allowClear: true,
		placeholder: 'Select...',
		options: options,
	},
}

export const OnSearch: Story = {
	args: {
		onSearch: (search: string) => console.log('Searching for:', search),
		placeholder: 'Search...',
		options: options,
		showSearch: true,
	},
}

export const WithListHeight: Story = {
	args: {
		listHeight: 200,
		placeholder: 'Select...',
		options: options,
	},
}

export const OpenCloseEvents: Story = {
	args: {
		onOpen: () => console.log('Dropdown opened'),
		onClose: () => console.log('Dropdown closed'),
		placeholder: 'Select...',
		options: options,
	},
}

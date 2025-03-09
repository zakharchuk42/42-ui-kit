import { Loading } from '../../../icons/Loading.tsx'
import { Cross } from '../../../icons/Cross.tsx'
import { Arrow } from '../../../icons/Arrow.tsx'
import { SelectProps } from '../types.ts'

interface GetIcon extends Pick<SelectProps, 'loading' | 'allowClear'> {
	selected: boolean
}

export const getIcon = ({ loading, allowClear, selected }: GetIcon) => {
	if (loading) return <Loading />
	if (allowClear && selected) return <Cross />
	return <Arrow />
}

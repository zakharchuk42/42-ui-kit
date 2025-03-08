import { ChangeEvent, FC, ForwardedRef } from 'react'
import { SwitchInput_, SwitchLabel_, SwitchWrapper_ } from './styles'
import { Loading } from '../../icons/Loading'

export interface Props {
	uniqId?: string
	labelFor?: string
	defaultChecked?: boolean
	checked?: boolean
	disabled?: boolean
	loading?: boolean
	size?: 'default' | 'small'
	label?: string
	className?: string
	onChange?: (checked: boolean) => void
	ref?: ForwardedRef<HTMLDivElement>
}

export const Switch: FC<Props> = ({
	checked,
	className,
	defaultChecked,
	disabled,
	loading,
	size = 'default',
	labelFor = 'switch',
	label,
	uniqId = 'switch',
	onChange,
	ref,
}) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event.target.checked)
		}
	}

	return (
		<SwitchWrapper_ className={className} ref={ref}>
			{label && <div>{label}</div>}
			<>
				<SwitchInput_
					disabled={disabled || loading}
					checked={checked}
					defaultChecked={defaultChecked}
					type="checkbox"
					id={uniqId}
					size={size}
					loading={loading ? 'true' : undefined}
					onChange={handleChange}
				/>
				<SwitchLabel_ htmlFor={labelFor}>
					<div>
						<Loading />
					</div>
				</SwitchLabel_>
			</>
		</SwitchWrapper_>
	)
}

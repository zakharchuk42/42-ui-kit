import styled from 'styled-components'
import variables from '../../variables'
import { SelectProps } from './types.ts'

interface SelectStylesProps extends Pick<SelectProps, 'disabled'> {
	selected?: boolean
}

export const SelectWrapper_ = styled.div<Pick<SelectProps, 'size'>>`
	position: relative;
	width: 100%;
	color: ${variables.colors.neutral.text.colorText.light};
	display: inline-flex;
	gap: ${variables.sizes.size.sm}px;
	align-items: center;

	${(props) => {
		switch (props.size) {
			case 'small': {
				return `
					font-size: ${variables.sizes.size.sm}px;
					height: ${variables.sizes.size.lg}px;
				`
			}
			default: {
				return `
					height: ${variables.sizes.size.xl}px;
				`
			}
		}
	}}
`

export const SelectInput_ = styled.div<SelectStylesProps>`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	border: 1px solid ${variables.colors.neutral.border.colorBorder.light};
	color: ${(props) =>
		props.selected
			? variables.colors.neutral.text.colorTextTertiary.light
			: variables.colors.neutral.text.colorText.light};
	overflow: hidden;
	transition: all 0.3s ease;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
	padding: 0 ${variables.sizes.size.xs}px;
	border-radius: ${variables.sizes.radius.sm}px;
	background: ${(props) =>
		props.disabled
			? variables.colors.neutral.backgroundBase.colorBgLayout.light
			: variables.colors.base.white};
	opacity: ${(props) => (props.disabled ? 0.6 : 1)};

	&:hover {
		border-color: ${(props) =>
			props.disabled
				? variables.colors.neutral.border.colorBorder.light
				: variables.colors.brand.primary.colorPrimary.light};
	}
`

export const SingleInput_ = styled.div`
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

export const IconWrapper_ = styled.div`
	display: flex;
	align-items: center;
	width: ${variables.sizes.size.sm}px;
	height: ${variables.sizes.size.sm}px;

	svg {
		width: 100%;
		height: 100%;
		fill: ${variables.colors.neutral.text.colorTextTertiary.light};
	}
`

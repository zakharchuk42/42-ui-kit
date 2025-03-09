import styled from 'styled-components'
import variables from '../../../../variables'

export const SelectDropdownWrapper_ = styled.div<{
	$listHeight?: number
}>`
	position: absolute;
	z-index: 10;
	gap: 2px;
	width: 100%;
	box-sizing: border-box;
	border-radius: ${variables.sizes.radius.sm}px;
	padding: ${variables.sizes.size.sm}px;
	border: 1px solid ${variables.colors.neutral.border.colorBorder.light};
	padding: ${variables.sizes.size.xxxs}px;
	background: ${variables.colors.base.white};
	max-height: ${(props) => props.$listHeight}px;
	overflow: scroll;
	top: calc(100% + 3px);
	box-shadow:
		0 6px 16px 0 rgba(0, 0, 0, 0.08),
		0 3px 6px -4px rgba(0, 0, 0, 0.12),
		0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

export const SelectDropdown_ = styled.div<{
	selected: boolean
	disabled?: boolean
}>`
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: ${variables.sizes.radius.sm}px;
	padding: ${variables.sizes.size.xs}px;
	background: ${(props) =>
		props.selected
			? variables.colors.neutral.backgroundBase.colorBgLayout.light
			: 'transparent'};

	${(props) => {
		if (props.disabled) {
			return `
				opacity: 0.3;
				cursor: not-allowed;
			`
		}
	}}
	&:hover {
		background: ${(props) =>
			props.disabled
				? 'transparent'
				: variables.colors.brand.primary.colorPrimaryBg.light};
	}
`

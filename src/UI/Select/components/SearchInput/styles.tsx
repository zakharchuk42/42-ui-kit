import styled from 'styled-components'
import variables from '../../../../variables'

export const SearchInputWrapper_ = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid ${variables.colors.neutral.border.colorBorderSecondary.light};

	svg {
		width: ${variables.sizes.size.sm}px;
		height: ${variables.sizes.size.sm}px;
		fill: ${variables.colors.neutral.text.colorTextTertiary.light};
		padding: 0 ${variables.sizes.size.xs}px;
	}
`

export const SearchInput_ = styled.input`
	padding: ${variables.sizes.size.xs}px;
	box-sizing: border-box;
	width: 100%;
	outline: none;
	border: none;

	&::placeholder {
		color: ${variables.colors.neutral.border.colorBorder.light};
	}
`

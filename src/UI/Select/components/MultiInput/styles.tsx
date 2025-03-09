import styled from 'styled-components'
import variables from '../../../../variables'

export const MultiPlaceholder_ = styled.div`
	width: 100%;
`

export const MultiInputWrapper_ = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	gap: ${variables.sizes.size.xxs}px;
`

export const MultiInputItem_ = styled.div`
	display: flex;
	gap: ${variables.sizes.size.xxs}px;
	background: ${variables.colors.brand.primary.colorPrimaryBg.light};
	padding: ${variables.sizes.size.xxs}px;
	border-radius: ${variables.sizes.radius.sm}px;
`

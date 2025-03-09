import styled from 'styled-components'
import variables from '../../variables'

interface SwitchStylesProps {
	loading?: string
	size: 'default' | 'small'
}

export const SwitchWrapper_ = styled.div`
	display: inline-flex;
	align-items: center;
	column-gap: ${variables.sizes.size.sm}px;
	position: relative;
`

export const SwitchInput_ = styled.input.attrs<SwitchStylesProps>(
	(props: SwitchStylesProps) => ({
		size: props.size,
		loading: props.loading,
	}),
)`
	&[type='checkbox'] {
		height: 0;
		width: 0;
		visibility: hidden;
		position: absolute;
	}

	${(props) => {
		switch (props.size) {
			case 'small': {
				return `& + label {
		          width: ${variables.sizes.size.lg}px;
		          height: ${variables.sizes.height.xs}px;
		
		          div {
		            width: ${variables.sizes.size.sm}px;
		            height: ${variables.sizes.size.sm}px;
		          }
		
		          &:active div {
		            width: ${props.disabled ? variables.sizes.size.sm : variables.sizes.size.size}px;
		          }
		
		          svg {
		            width: calc(${variables.sizes.size.sm}px - ${variables.sizes.size.xxs}px);
		            height: calc(${variables.sizes.size.sm}px - ${variables.sizes.size.xxs}px);
		          }
		        }
		      `
			}
			default: {
				return `& + label {
		          width: ${variables.sizes.size.xxl}px;
		          height: ${variables.sizes.height.sm}px;
		
		          div {
		            width: ${variables.sizes.size.ms}px;
		            height: ${variables.sizes.size.ms}px;
		          }
		
		          &:active div {
		            width: ${props.disabled ? variables.sizes.size.ms : variables.sizes.size.lg}px;
		          }
		
		          svg {
		            width: calc(${variables.sizes.size.ms}px - ${variables.sizes.size.xxs}px);
		            height: calc(${variables.sizes.size.ms}px - ${variables.sizes.size.xxs}px);
		          }
		        }
		      `
			}
		}
	}}
	&:checked + label {
		background: ${variables.colors.brand.primary.colorPrimary.light};
	}

	&:checked + label div {
		transform: translateX(-100%);
		left: calc(100% - ${variables.sizes.size.xxxs}px);
	}

	${(props) =>
		(props.disabled || props.loading) &&
		`& + label {
	      opacity: 0.65;
	      cursor: not-allowed;
	    }
  `}

	${(props) =>
		props.loading &&
		`& + label {
	      svg {
	        display: block;
	        fill: ${props.checked ? variables.colors.brand.primary.colorPrimary.light : variables.colors.neutral.backgroundBase.colorBgMask.light};
	      }
        }
  `}
`

export const SwitchLabel_ = styled.label`
	cursor: pointer;
	text-indent: -9999px;
	background: ${variables.colors.neutral.backgroundBase.colorBgMask.light};
	display: block;
	border-radius: ${variables.sizes.radius.xxl}px;
	position: relative;

	svg {
		display: none;
		width: calc(${variables.sizes.size.ms}px - ${variables.sizes.size.xxs}px);
		height: calc(${variables.sizes.size.ms}px - ${variables.sizes.size.xxs}px);
		position: absolute;
		top: ${variables.sizes.size.xxxs}px;
		left: ${variables.sizes.size.xxxs}px;
	}

	div {
		position: relative;
		top: ${variables.sizes.size.xxxs}px;
		left: ${variables.sizes.size.xxxs}px;
		background: ${variables.colors.base.white};
		border-radius: ${variables.sizes.radius.xxl}px;
		transition: all 0.15s ease;
	}
`

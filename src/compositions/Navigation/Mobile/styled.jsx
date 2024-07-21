import styled from 'styled-components'
export const ModalWrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	z-index: 101;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	overflow: auto;

	will-change: transform, opacity;
	animation: mobileVanModalOpen .3s ease forwards;
	transform-origin: center top;
	@keyframes mobileVanModalOpen {

		0% {
			opacity: 0;
			transform: scaleY(0);
		}
	
		100% {
			opacity: 1;
			transform: scaleY(1);
		}
	}
`
import React from 'react'

interface ModalProps {
	open: boolean;
	onClose?: VoidFunction
	children?: React.ReactNode
}
const Modal:React.FC<ModalProps> = (props) => {
	return (
		<div className={`fixed top-0 left-0 w-screen h-screen ${props.open ? 'block' : 'none'} bg-[rgba(0,0,0,0.3)]`} onClick={props.onClose}>
			{props.children}
		</div>
	)
}

export default Modal
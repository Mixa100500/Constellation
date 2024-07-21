import { createContext, useCallback, useContext, useState } from "react"
import { createPortal } from "react-dom"

const ModalCLoseContext = createContext(null)

const Modal = ({ content, open }) => {
	if (!open) {
		return null
	}
	return createPortal(content, document.body)
}

export const ModalManager = (props) => {
	const { children, content } = props
	const [modalOpen, setModalOpen] = useState(false)
	const close = useCallback(() => {
		setModalOpen(false)
	})

	return (
		<ModalCLoseContext.Provider value={close}>
			<Modal
				open={modalOpen}
				content={content}
			/>
			<div onClick={() => setModalOpen(true)}>{children}</div>
		</ModalCLoseContext.Provider>
	)
}

export const useCloseModal = () => {
	const close = useContext(ModalCLoseContext)
	if (close === null) {
		throw new Error('useCloseModal must be called in the context provider')
	}
	return close
}
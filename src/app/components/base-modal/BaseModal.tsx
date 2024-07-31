import { FC, PropsWithChildren } from 'react'

const BaseModal: FC<PropsWithChildren<{
  visible?: boolean
  onClose?: () => void
}>> = (props) => {
  return (
    <>
      {
      props.visible
        ? (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="w-1/3 min-w-72 bg-white rounded-md p-4">
              {props.children}
            </div>
          </div>
          )
        : null
    }
    </>
  )
}

export default BaseModal

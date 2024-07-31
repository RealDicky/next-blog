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
            <div className="w-1/3 bg-white rounded-md p-4">
              {/* <h1 className="text-xl font-bold mb-4">Modal Title</h1>
              <p>Modal Content</p> */}
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

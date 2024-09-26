import React from 'react'

function IconBtn({ text, onclick, children, disabled, outline = false, type, customClasses }) {
    return (
        <button
            disabled={disabled}
            onClick={onclick}
            type={type}
            >
            {
                children ?
                    (
                        <>
                            <span>{text}</span>
                            {children}
                        </>
                    )
                    :
                    (
                        text
                    )
            }
        </button>
    )
}

export default IconBtn;
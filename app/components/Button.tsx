import type React from "react"


export default function Button({className, children, type, onClick, disabled}: React.ComponentPropsWithoutRef<"button">){
    return <button disabled={disabled} onClick={onClick} className={ 
					`cursor-pointer px-2 text-center font-medium rounded-md  transition-[background-color] duration-150 ${className}`
				} type={ type ? type : 'submit' }>{children}</button>
}
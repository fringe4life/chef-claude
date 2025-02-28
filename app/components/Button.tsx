import type React from "react"


export default function Button({className, children, type, onClick, disabled}: React.ComponentPropsWithoutRef<"button">){
    return <button disabled={disabled} onClick={onClick} className={ 
					` px-2 text-center font-medium bg-neutral-950 text-neutral-50 rounded-md ${className}`
				} type={ type ? type : 'submit' }>{children}</button>
}
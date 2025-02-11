import {FC, ReactNode} from "react";

interface CONTAINER_TYPE{
    className?: string
    children?: ReactNode
}

const Container: FC<CONTAINER_TYPE> = ({className, children}) => {
    return (
        <main className={'w-screen flex-center'}>
        <div className={`container ${className}`}>
            {children}
        </div>
        </main>
    )
}

export default Container
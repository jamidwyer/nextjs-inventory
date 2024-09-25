import React, { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    name: string
}

export const Section = (props: SectionProps) => {
    const { children, name } = props;

    return (
        <div className="flex flex-col items-center gap-6 rounded-sm bg-coconut p-2 m-2">
            <h3 className="self-start pl-6 border-b-2 w-full">{name}</h3>
            {children}
        </div>

    )
}

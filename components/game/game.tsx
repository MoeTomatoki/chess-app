import { welcomeFunc } from "./model/script"

interface Account {
    id: number
    displayName: string
    version: 1
}

const person1: Account = {
    id: 79,
    displayName: "MoeTomatoki",
    version: 1
}

export function Game({ className }) {
    return (
        <>
            <div className={className}>
                {welcomeFunc(person1)}
            </div>
        </>
    )
}
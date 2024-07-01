import clsx from "clsx"

interface Account {
    id: number
    displayName: string
    version: 1
}

export function welcomeFunc(user: Account) {
    return `Hello from TypeScript! ${user.displayName}`
}
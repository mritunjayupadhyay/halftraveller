import { ReactElement, ReactNode } from "react"

export interface IDroprownItem {
    readonly content: ReactNode
    readonly id?: string | number
}

export interface IDropdownProps {
    readonly options: IDroprownItem[]
    readonly onChange?: (item: IDroprownItem) => void
    readonly children: (isOpen: boolean, setIsOpen: (value: boolean) => void) => ReactElement
    readonly onClose?: () => void
    readonly closeOnChange?: boolean
    readonly selected?: IDroprownItem
}
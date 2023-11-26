
import cntl from 'cntl'

export const classes = {
    dropdownWrapper: (): string => cntl`
      relative w-fit cursor-pointer
    `,
    dropdownArea: (): string => cntl`
      absolute top-full left-0 w-full z-10 pt-1
      w-[150px] bg-white rounded-md shadow-lg
    `,
    dropdown: (): string => cntl``,
    item: (
      isLast?: boolean,
      isSelected?: boolean,
    ): string => cntl`
      py-4 px-6 hover:bg-gray-100 cursor-pointer text-sm
      ${isSelected ? 'bg-gray-100' : ''}
      ${!isLast ? 'border-b border-gray-100' : ''}
    `,
  }
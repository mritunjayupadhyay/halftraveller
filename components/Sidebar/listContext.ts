import { createContext } from 'react';
type ListContextType = {
    restaurant: string, attraction: string, 
    setRestaurant: (restaurant: string) => void, 
    setAttraction: (attraction: string) => void, 
}
export const ListContext = createContext({} as ListContextType);
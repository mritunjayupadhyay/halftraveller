import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const travelAdvisorApi = createApi({
    reducerPath: 'travelAdvisorApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://travel-advisor.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set(
                'X-RapidAPI-Key',
                process.env.NEXT_PUBLIC_RAPID_API_KEY as string
            )
            headers.set(
                'X-RapidAPI-Host',
                'travel-advisor.p.rapidapi.com/'
            )

            return headers
        },
    }),
    endpoints: (builder) => ({
        getPlaces: builder.mutation({
            query: () => ({
                url: `restaurants/v2/list?units=km&lang=en_US`,
                method: 'POST',
                body: {
                    "geoId": 304558
                }
            }),
        }),
    }),
})

export const { useGetPlacesMutation } = travelAdvisorApi
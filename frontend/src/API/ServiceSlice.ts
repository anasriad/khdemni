
import { apiSlice } from "./apiSlice"
const ServicesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: () => ({ url: `services/`, method: 'GET' })
        }),
    })
})

export const {
    useGetAllServicesQuery
} = ServicesApiSlice
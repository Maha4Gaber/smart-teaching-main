import axios from 'axios'
import { useQuery } from 'react-query'


const useQueryData = (url, method, key, body= null) => {


    let getData = () => {
        return axios({
            url: url,
            method: method,
            data: body
        })
    }

    const {isLoading, isError, data, isFetching} = useQuery(key, getData)
        

    return {isLoading, isError, isFetching, data};
}

export default useQueryData






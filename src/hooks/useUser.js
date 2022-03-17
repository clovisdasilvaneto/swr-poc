import useSWR from "swr"
import { fetcher } from "../api"

const useUser = (username) => {
    const { data, error } = useSWR(`users/${username}`, fetcher)
  
    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
}

export default useUser
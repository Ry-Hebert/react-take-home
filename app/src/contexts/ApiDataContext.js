import React, {
    useState,
    useContext,
    createContext,
    useEffect
} from 'react'

import axios from 'axios'
    
const apiURL = 'https://www.plugco.in/public/take_home_sample_feed'

const ApiDataContext = createContext({
    apiData: [],
})

export const ApiDataContextProvider = (props) => {
    const [apiData, setApiData] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const apiRes = await axios.get(apiURL)
                
                //if this doesn't work check axios needs
                const resData = await apiRes.data

                console.log(`This is apiRes: ${apiRes} This is resData: ${resData}`)

                setApiData(resData.campaigns)

            } catch(error){console.log(error)}
        }
        fetchData('apiData')
    }, [])

    console.log(`This is the data res: ${apiData}`)
    console.log(apiData)

    return (
        <ApiDataContext.Provider value={{ apiData }}>
        {props.children}
        </ApiDataContext.Provider>
    )
}

export const useApiDataContext = () => useContext(ApiDataContext)
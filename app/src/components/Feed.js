import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useApiDataContext } from '../contexts/ApiDataContext'
import Campaign from './Campaign'

const useStyles = makeStyles((theme) => ({
    plugFeed: {
        maxWidth: '375px',
        width: '100%',
        backgroundColor: '#f7fbfc',
    },
}));


const Feed = () =>{
    const feedData = useApiDataContext()
    const classes = useStyles()

    return (
        <div className={classes.plugFeed}>
            {console.log('Test Feed .js')}
            {console.log(feedData)}
            { feedData ? ( 
                <div></div>
                ) : (
                <h1>Error: 404</h1>
                )
            }
            {/* {feedData.apiData.campaigns.map( element =>{
                return (<Campaign entry={element} />)
            })} */}
        </div>
    )
}

export default Feed

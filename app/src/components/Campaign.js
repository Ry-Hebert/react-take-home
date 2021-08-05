import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    campCard: {
        position: 'absolute',
        width: '458px',
        height: '351px',
        left: '0px',
        top: '70px',
    },
}));


const Feed = (props) =>{
    const classes = useStyles()

    return (
        <div className={classes.campCard}>
        </div>
    )
}

export default Feed

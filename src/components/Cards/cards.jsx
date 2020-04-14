import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import styles from './cards.module.css';
import CountUP from 'react-countup';
import cx from 'classnames';
const Cards = ({data}) => {

    if(!Object.keys(data).length){
        return 'loading'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>INFECTED</Typography>
                        <Typography variant='h5'>
                            <CountUP 
                                start={0}
                                end={data.confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>RECOVERED</Typography>
                        <Typography variant='h5'>
                            <CountUP 
                                start={0}
                                end={data.recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>DEATHS</Typography>
                        <Typography variant='h5'>
                            <CountUP 
                                start={0}
                                end={data.deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths</Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
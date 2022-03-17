import { Button } from '@mui/material'
import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../../api'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Organization() {
    const {data, mutate} = useSWR('organization')

    const handleRevalidation = () => {
        mutate(fetcher('users/nevinhajs'), false)
    }

    return data ?  (
        <Card style={{margin: "2rem "}} sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={data.avatar_url}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.bio}
            </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    ) : 
    <Button 
        onClick={handleRevalidation} 
        style={{marginLeft: "5rem"}} 
        variant="contained"
    >Show my organization</Button>
}

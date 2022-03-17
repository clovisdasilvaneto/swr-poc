import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useUser from '../../hooks/useUser';
import { fetcher } from '../../api';

export default function User() {
    const {user, isLoading} = useUser('clovisdasilvaneto', fetcher)

    if(isLoading) return "Loading User..."

    return (
        <Card style={{margin: "2rem "}} sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={user.avatar_url}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {user.bio}
            </Typography>
            </CardContent>
            <CardActions>

            <Button size="small">{user.followers} followers</Button>
            <Button size="small">{user.following} following</Button>
            </CardActions>
        </Card>
    );
}
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { fetcher } from '../../api'
import useUser from '../../hooks/useUser'
import { Avatar } from '@mui/material';

export default function Header() {
    const { user, isLoading } = useUser('clovisdasilvaneto', fetcher)

    if(isLoading) return "Loading Header..."

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Github User Details
                </Typography>
                
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user.avatar_url} />
              </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
    );
}

import { Divider,
        Hidden,
        Button,
        Toolbar,
        ListSubheader,
        AppBar,
        IconButton,
        Switch,
        Box,
        Drawer,
        List,
        ListItem,
        ListItemIcon,
        ListItemText,
        Grid,
        Typography,
        createTheme,
        ThemeProvider,
} from "@mui/material"

import { Home, Subscriptions, Whatshot } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, MoreVert, VideoCall } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';

import Avatar from './assets/avatar.jpeg'
import LogoPreto from './assets/preto.png'
import LogoBranco from './assets/branco.png'
import Thumb1 from './assets/thumb1.png'
import Thumb2 from './assets/thumb2.png'
import Thumb3 from './assets/thumb3.png'
import Thumb4 from './assets/thumb4.png'
import Thumb5 from './assets/thumb5.png'
import Thumb6 from './assets/thumb6.png'
import Thumb7 from './assets/thumb7.png'
import Thumb8 from './assets/thumb8.png'

import { useState } from "react";

const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb1,
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb2,
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb3,
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb4,
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb5,
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb6,
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb7,
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: Avatar,
      thumb: Thumb8,
    },
  ];

export function Main() {
    const [darkMode, setDarkMode] = useState(false)

    const defaultTheme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
              main: '#f44336',
            },
            secondary: {
              main: '#3EA6FF',
            },
            background: {
              default: darkMode ? '#232323' : '#fff',
              dark: darkMode ? '#181818' : '#f4f6f8',
              paper: darkMode ? '#232323' : '#fff',
            },
            color: {
                default: darkMode ? '#232323' : '#fff',
            }
        },
    })

    return (
        <ThemeProvider theme={defaultTheme}>
            <div style={{
                height: '100vh',
                backgroundColor: defaultTheme.palette.background.dark,
            }}>
                <AppBar color='inherit' 
                        sx={{
                            boxShadow: 'none',
                            zIndex: 1201,
                        }}>
                    <Toolbar sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                        <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ 
                                mr: 2,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={defaultTheme.palette.type === 'dark' ? LogoBranco : LogoPreto}
                            style={{
                                height: '25px',
                            }}/>
                        </div>
                        <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '5px',
                            }}>
                            <Switch value={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                            />
                            <IconButton
                                sx={{

                                }}
                            >
                                <VideoCall />
                            </IconButton>
                            <IconButton
                                sx={{

                                }}
                            >
                                <AppsIcon />
                            </IconButton>
                            <IconButton
                                sx={{

                                }}
                            >
                                <MoreVert />
                            </IconButton>
                            <Button color="secondary"
                                    variant='outlined'
                                    startIcon={<AccountCircle />}
                                    sx={{
                                        textTransform: 'uppercase'
                                    }}>
                                Fazer login
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <Box sx={{display: 'flex'}}>
                    <Hidden mdDown>
                        <Drawer
                            variant="permanent"
                            sx={{
                            width: 240,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: 
                                { width: '14rem',
                                border: 'none',
                                },
                            }}
                        >
                            <Toolbar />
                            <div style={{overflow: 'auto',}}>
                                <List sx={{
                                            [`& .MuiListItem-root`]: 
                                            { paddingTop: '4px',
                                                paddingBottom: '4px',
                                            },
                                        }}>
                                    <ListItem ListItemButton>
                                        <ListItemIcon>
                                            {<Home />}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={'Início'}
                                            sx={{
                                            [`& .MuiListItemText-primary`]: 
                                                { fontSize: '14px' },
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                        <ListItemIcon>
                                            {<Whatshot />}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={'Em alta'}
                                            sx={{
                                            [`& .MuiListItemText-primary`]: 
                                                { fontSize: '14px' },
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                        <ListItemIcon>
                                            {<Subscriptions />}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={'Incrições'}
                                            sx={{
                                            [`& .MuiListItemText-primary`]: 
                                                { fontSize: '14px' },
                                            }}
                                        />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List sx={{
                                            [`& .MuiListItem-root`]: 
                                            { paddingTop: '4px',
                                                paddingBottom: '4px',
                                            },
                                        }}>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Biblioteca'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <HistoryIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Histórico'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                </List>
                                <Divider />
                                <Box p={4} sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '8px',
                                            }}>
                                    <Typography variant='body2' style={{textAlign: 'center'}}>
                                        Faça login para curtir vídeos, comentar e se inscrever.
                                    </Typography>
                                    <Box>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        startIcon={<AccountCircleIcon />}
                                        sx={{padding: '5px 10px'}}
                                    >
                                        Fazer login
                                    </Button>
                                    </Box>
                                </Box>
                                <Divider />
                                <List component='nav'
                                        aria-labelledby='nested-list-subheader'
                                        sx={{
                                        [`& .MuiListItem-root`]: 
                                            { paddingTop: '4px',
                                            paddingBottom: '4px',
                                            },
                                        }}
                                        subheader={
                                        <ListSubheader
                                            component='div'
                                            id='nested-list-subheader'
                                            style={{textAlign: 'center',
                                                    paddingTop: '4px'
                                            }}
                                            sx={{textTransform: 'uppercase' }}
                                        >
                                            O Melhor do youtube
                                        </ListSubheader>
                                        }>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Música'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Esportes'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Jogos'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Filmes'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Notícias'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Ao vivo'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Destaques'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Vídeos 360'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                    <ListItem ListItemButton>
                                    <ListItemIcon>
                                        <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Procurar mais'}
                                        sx={{
                                        [`& .MuiListItemText-primary`]: 
                                            { fontSize: '14px' },
                                        }}
                                    />
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                    </Hidden>
                    <Box p={6} sx={{paddingTop: '4.5rem'}}>
                        <Typography
                            variant='h5'
                            color='textPrimary'
                            style={{fontWeight: 800}}
                        >
                            Recomendados
                        </Typography>

                        <Grid container spacing={2}>
                            {videos.map((item, index) => (
                                <Grid item
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                >
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography style={{ fontWeight: 600 }}
                                                        gutterBottom
                                                        variant='body1'
                                                        color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography display='block'
                                                        variant='body2'
                                                        color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2'
                                                        color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    )
}
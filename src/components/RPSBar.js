import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import LandscapeIcon from '@mui/icons-material/Landscape'
import FeedIcon from '@mui/icons-material/Feed'
import GitHubIcon from '@mui/icons-material/GitHub'
import Box from '@mui/material/Box';

const RPSBar = () => {
  const handleClick = () => {
    window.open('https://github.com/Vesulius/Reactor-Challenge')
  }

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <LandscapeIcon sx={{ mr: 2 }} />
        <ContentCutIcon sx={{ mr: 2 }} />
        <FeedIcon sx={{ mr: 2 }} />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" aria-label="github" onClick={handleClick}>
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default RPSBar

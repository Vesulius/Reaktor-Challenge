import ContentCutIcon from '@mui/icons-material/ContentCut'
import LandscapeIcon from '@mui/icons-material/Landscape'
import FeedIcon from '@mui/icons-material/Feed'
import CircularProgress from '@mui/material/CircularProgress'

const RPSIcon = ({ player }) => {
  switch (player.played) {
    case 'ROCK':
      return (
        <>
          <LandscapeIcon fontSize="large" />
        </>
      )
    case 'PAPER':
      return (
        <>
          <FeedIcon fontSize="large" />
        </>
      )
    case 'SCISSORS':
      return (
        <>
          <ContentCutIcon fontSize="large" />
        </>
      )
    default:
      return (
        <>
          <CircularProgress color="inherit" />
        </>
      )
  }
}

export default RPSIcon

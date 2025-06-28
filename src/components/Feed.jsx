import { Box } from '@mui/material'
import Post from './Post'

const Feed = () => {
  
  return (
    <Box
      flex={4}
      p={{ xs: 1, sm: 2 }}
      sx={{
        mr: { xs: 0, sm: 1, md: 2 } 
      }}
    >
      <Post />
    </Box>
  )
}

export default Feed

import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material'
import { useState } from 'react'

const App = () => {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* ✅ Important for full theme support */}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction='row'
          spacing={2}
          justifyContent='space-between'
          sx={{
            px: { xs: 1, sm: 2 },
            gap: { xs: 0, sm: 2 }
          }}
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App

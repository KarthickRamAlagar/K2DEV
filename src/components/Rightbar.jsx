import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: 'none', sm: 'none' ,md:"block"},
        ml: { sm: 0, md: 1 }, // slight left margin only on medium+
        mr: { md: 1, lg: 2 } // reduce excessive right margin
      }}
    >
      {/* Use sticky for smoother scroll behavior */}
      <Box
        sx={{
          position: 'sticky',
          top: 70,
          width: 230
        }}
      >
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://material-ui.com/static/images/avatar/1.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://material-ui.com/static/images/avatar/2.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://material-ui.com/static/images/avatar/3.jpg'
          />
          <Avatar alt='Agnes Walker' src='' />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/6.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/7.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/8.jpg'
          />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://material-ui.com/static/images/image-list/breakfast.jpg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://material-ui.com/static/images/image-list/burgers.jpg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://material-ui.com/static/images/image-list/camera.jpg'
              alt=''
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://material-ui.com/static/images/avatar/3.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <>
                  <Typography
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar

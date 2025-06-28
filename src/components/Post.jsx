import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Checkbox,
  Box
} from '@mui/material';

import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';

// 🔹 Project data
const projects = [
  {
    id: 1,
    title: 'CineScope',
    subheader: 'Built with React, Tailwind, Vite',
    description:
      'CineScope is a modern movie website with dynamic filtering, interactive carousels, and dark mode. Built using React.js, Tailwind CSS, and Vite.',
    image: './CineScope.png',
    demoLink: 'https://karthickramalagar.github.io/CineScope/'
  },
  {
    id: 2,
    title: 'Shop Zone',
    subheader: 'Modern E-commerce Platform',
    description:
      'Shop Zone is a responsive e-commerce app with cart, product detail pages, coupon logic, and smooth checkout built with React.',
    image: './ShopZone.png',
    demoLink: 'https://karthickramalagar.github.io/Shop-Zone/'
  },
  {
    id: 3,
    title: 'Brainwave',
    subheader: 'Modern UI/UX Project',
    description:
      'Brainwave is a sleek UI/UX project with a clean design, smooth animations, and fully responsive layout built with React and Tailwind.',
    image: './BrainWave.png',
    demoLink: 'https://karthickramalagar.github.io/BrainWave/'
  },
  {
    id: 4,
    title: 'SpaceX Info Page',
    subheader: 'Responsive Web Project',
    description:
      'A SpaceX-themed webpage showing info on Falcon 9, Heavy, and Dragon with mobile nav & responsive layout.',
    image: './SpaceX.png',
    demoLink: 'https://karthickramalagar.github.io/SpaceX/'
  }
];

const Feed = () => {
  return (
    <Box>
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{
            maxWidth: 700,
            marginBottom: '2rem',
            marginTop: '2rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }}>
                {project.title.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={project.title}
            subheader={project.subheader}
          />
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{
              height: 250,
              width: '100%',
              objectFit: 'contain'
            }}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {project.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                color="error"
              />
            </IconButton>
            <IconButton
              aria-label="view live demo"
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              <VisibilityIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Feed;

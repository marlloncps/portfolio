import { Box, Container, IconButton, Typography } from '@mui/material';
import { EASTMAN, WHITE_TEXT } from '../utils/constants';
//icons
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface PersonalInfoProps {
  styles?: any;
}

export default function PersonalInfo(props: PersonalInfoProps) {
  console.log(props);
  return (
    <Container sx={{ ...props.styles }}>
      <Box
        sx={{
          py: 12,
        }}
      >
        <Typography
          sx={{
            color: WHITE_TEXT,
            fontWeight: '700',
            fontSize: '3rem',
            lineHeight: 1,
            fontFamily: EASTMAN,
          }}
        >
          Márllon César
        </Typography>
        <Typography
          sx={{
            color: WHITE_TEXT,
            fontFamily: EASTMAN,
            fontWeight: 600,
            mt: 2,
            fontSize: '1.4em',
          }}
        >
          Júnior Full-Stack Developer
        </Typography>
        <Typography
          sx={{
            color: WHITE_TEXT,
            fontFamily: EASTMAN,
            fontWeight: 500,
            mt: 2,
            fontSize: '1em',
            lineHeight: 1.2,
            textAlign: 'justify',
          }}
        >
          Meu expertise reside na concepção e criação de interfaces <br />{' '}
          altamente intuitivas, integradas a sistemas de gerenciamento robustos,
          <br />
          que proporcionam experiências de usuário excepcionais e simplificam{' '}
          <br />
          processos complexos.
        </Typography>
      </Box>

      <Box>
        <IconButton href='https://github.com/marlloncps' target='_blank'>
          <GitHubIcon sx={{ color: WHITE_TEXT, cursor: 'pointer' }} />
        </IconButton>
        <IconButton href='https://instagram.com/marlloncps' target='_blank'>
          <InstagramIcon sx={{ color: WHITE_TEXT, cursor: 'pointer' }} />
        </IconButton>
        <IconButton href='https://linkedin.com/in/marlloncps' target='_blank'>
          <LinkedInIcon sx={{ color: WHITE_TEXT, cursor: 'pointer' }} />
        </IconButton>
      </Box>
    </Container>
  );
}

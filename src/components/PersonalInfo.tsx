import { Box, Container, Typography } from '@mui/material';
import { EASTMAN, WHITE_TEXT } from '../utils/constants';

export default function PersonalInfo() {
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: 'rgb(15, 23, 42)', my: 0, py: 0 }}
    >
      <Container>
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
            }}
          >
            Eu desenvolvo interfaces intuitivas e <br></br> sistemas de
            gerenciamento eficazes.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}

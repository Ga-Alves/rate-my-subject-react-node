import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

// router dom
import { useNavigate } from 'react-router-dom';

// interfaces
import { loginBody } from '../../../requests/login';

// requests
import login from '../../../requests/login';


export default function() {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const body:loginBody = {
          email: String(data.get('email')),
          password: String(data.get('password')),
        };
        login(body)
          .then((res) => navigate('../dashboard/list'))
          .catch((err) => console.log('ERRO: ', err.response.data));
    };

    return (
        <Grid item xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            alignItems="center"
            square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '10%',
              marginTop: '20vh'
            }}
          >

            <Typography component="h1" variant="h5">
              Fazer Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Não tem uma conta? Cadastre-se"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
    )
};
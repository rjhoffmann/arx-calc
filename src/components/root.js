import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import ConversionForm from './conversion-form';
import ConversionTable from './conversion-table';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
  },
  footer: {
    marginTop: theme.spacing(4),
  },
}));

const Root = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <ConversionForm />
          <ConversionTable />
          <Typography variant="caption" className={classes.footer}>2019 rjhoff | <Link href="https://github.com/rjhoffmann/arx-calc">source</Link></Typography>
        </Grid>
      </Container>
    </>
  )
};

export default Root;

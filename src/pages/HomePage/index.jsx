import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
// import Wrapper from '../../containers/layouts/Wrapper';
import useStyles from './styles';

const HomePage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h3" className={classes.userName}>
        {t('home.heading')}
      </Typography>
      <p>Homepage</p>
    </>
  );
};

export default HomePage;

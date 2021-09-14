import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

const HomePage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h3" className={classes.userName}>
        {t('home.heading')}
      </Typography>
      <p>This will be the home page of e2e dashboard. Go to Pod Level Runs page from the side bar.</p>
    </>
  );
};

export default HomePage;

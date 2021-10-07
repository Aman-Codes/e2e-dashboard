import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import CustomCard from 'components/CustomCard';
import useStyles from './styles';

const HomePage = ({ scheduledData, manualData}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h3" className={classes.userName}>
        {t('home.heading')}
      </Typography>
      <p>This will be the home page of e2e dashboard. Go to Pod Level Runs page from the side bar.</p>
      {scheduledData && scheduledData.map((scheduleItem) => <CustomCard data={scheduleItem} key={scheduleItem.id} />)}
      {manualData && manualData.map((manualItem) => <CustomCard data={manualItem} key={manualItem.id} />)}
    </>
  );
};

export default HomePage;

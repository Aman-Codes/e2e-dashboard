import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Header from '../../../components/Header';
// import SideBar from '../../../components/SideBar';
import useStyles from './styles';

const Scaffold = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <header className={classes.header}>
        <Header />
      </header>
      <aside className={classes.sidebar}>
        <SideBar />
      </aside> */}
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Scaffold;

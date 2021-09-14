import React from 'react';
import { useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon } from 'litmus-ui';
import history from 'utils/history';
import { ReactComponent as CodeIcon } from '../../svg/code.svg';
import { ReactComponent as CommunityIcon } from '../../svg/community.svg';
import { ReactComponent as DocsIcon } from '../../svg/docs.svg';
import useStyles from './styles';

const CustomisedListItem = ({
  children,
  handleClick,
  label,
  selected,
}) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      selected={selected}
      onClick={handleClick}
      className={`${classes.drawerListItem} ${selected ? classes.active : ''}`}
    >
      <ListItemIcon className={classes.listIcon}>{children}</ListItemIcon>
      <ListItemText primary={label} className={classes.listText} />
    </ListItem>
  );
};

const SideBar= () => {
  const classes = useStyles();
  const pathName = useLocation().pathname.split('/')[1];
  return (
    <Drawer
      data-cy="sidebarComponent"
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List className={classes.drawerList}>
        <CustomisedListItem
          key="home"
          handleClick={() => {
            history.push({
              pathname: '/home'
            });
          }}
          label="Home"
          selected={pathName === 'home'}
        >
          <Icon name="home" />
        </CustomisedListItem>
        <div data-cy="pod-level-run">
          <CustomisedListItem
            key="pod-level-run"
            handleClick={() => {
              history.push({
                pathname: '/pod-level-run'
              });
            }}
            label="Pod Level Runs"
            selected={pathName === 'pod-level-run'}
          >
            <Icon name="scheduleWorkflow" />
          </CustomisedListItem>
        </div>
        <CustomisedListItem
          key="manual-run"
          handleClick={() => {
            history.push({
              pathname: '/manual-run'
            });
          }}
          label="Manual Runs"
          selected={pathName === 'manual-run'}
        >
          <Icon name="workflow"/>
        </CustomisedListItem>
        <hr className={classes.quickActions} />
        <CustomisedListItem
          key="litmusDocs"
          handleClick={() => {
            window.open('https://docs.litmuschaos.io/');
          }}
          label="Litmus Docs"
        >
          <DocsIcon />
        </CustomisedListItem>
        <CustomisedListItem
          key="litmusAPIDocs"
          handleClick={() => {
            window.open(
              'https://litmuschaos.github.io/litmus/graphql/v2.0.0/api.html'
            );
          }}
          label="Litmus API Docs"
        >
          <CodeIcon />
        </CustomisedListItem>
        <CustomisedListItem
          key="Slack"
          handleClick={() => {
            window.open(
              'https://app.slack.com/client/T09NY5SBT/CNXNB0ZTN'
            );
          }}
          label="Slack"
        >
          <CommunityIcon />
        </CustomisedListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;

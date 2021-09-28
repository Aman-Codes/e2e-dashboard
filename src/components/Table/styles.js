import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const CustomTooltip = withStyles(() => ({
  tooltip: {
    left: '-15px',
  },  
}))(Tooltip);

const useStyles = makeStyles(() => ({
  smallRadialChart: {
    height: '3rem',
    margin: '0.5rem 0',
    width: '3rem',
    '& p': {
      fontSize: '1rem',
      maxWidth: '8rem',
      minWidth: '1rem',
      lineHeight: '1rem',
      height: '0.5rem'
    }
  },
  drawerContainer: {
    minWidth: '22rem',
    marginTop: '3rem',
    textAlign: 'left'
  },
  outlinedPills: {
    display: 'block',
    margin: '0.5rem',
    width: 'min-content',
    borderRadius: '1rem',
    padding: '0.5rem 1rem 1.5rem 1rem',
    fontWeight: '500'
  }
}));

export default useStyles;

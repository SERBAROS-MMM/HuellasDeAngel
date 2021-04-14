import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpasionPanelStep from './ExpasionPanelStep';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const TabEvaluation = ({Steps = []})=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        {
             Steps.map((item,key)=>
             <ExpansionPanel key={key} expanded={expanded === 'panel'+key} onChange={handleChange('panel'+key)}>
                 <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel"+key+"bh-content"}
                    id={"panel"+key+"bh-header"}
        >
          <Typography className={classes.heading}>{item.nameStep}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ExpasionPanelStep Fields ={item.Fields}/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
             )
             }
    </div>
  );
}

export default TabEvaluation
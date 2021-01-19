import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpasionPanelPaso from './ExpasionPanelPaso';

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

export default function TabEvaluation({Pasos = []}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        {
             Pasos.map((item,key)=>
             <ExpansionPanel expanded={expanded === 'panel'+key} onChange={handleChange('panel'+key)}>
                 <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel"+key+"bh-content"}
                    id={"panel"+key+"bh-header"}
        >
          <Typography className={classes.heading}>{item.nombrePaso}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ExpasionPanelPaso Campos ={item.campos}/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
             )
             }
    </div>
  );
}
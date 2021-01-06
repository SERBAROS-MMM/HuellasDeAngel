import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GridItem from "components/dashboard/Grid/GridItem.js";
import GridContainer from "components/dashboard/Grid/GridContainer.js";
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="1. Datos del Usuario" {...a11yProps(0)} />
        <Tab label="2.	Motivo de Ingreso" {...a11yProps(1)} />
        <Tab label="3.	Examen Mental" {...a11yProps(2)} />
        <Tab label="4.	Historia Personal y Familiar" {...a11yProps(3)} />
        <Tab label="5.	Antecedentes" {...a11yProps(4)} />
        <Tab label="6.	Valoración por Áreas" {...a11yProps(5)} />
        <Tab label="7. Hipótesis Diagnostica" {...a11yProps(6)} />
        <Tab label="8. Recomendaciones" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>      
     
      </TabPanel>
      <TabPanel value={value} index={1}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <TextField
            label="Motivo referido en la ficha de ingreso"
            id="Mot_FIIN"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <TextField
            label="Referido por el Usuario"
            id="Mot_REUS"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </GridItem>
     </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        3.	Examen Mental
      </TabPanel>
      <TabPanel value={value} index={3}>
        4.	Historia Personal y Familiar
      </TabPanel>
      <TabPanel value={value} index={4}>
        5.	Antecedentes
      </TabPanel>
      <TabPanel value={value} index={5}>
        6.	Valoración por Áreas
      </TabPanel>
      <TabPanel value={value} index={6}>
        7. Hipótesis Diagnostica
      </TabPanel>      
      <TabPanel value={value} index={7}>
        8. Recomendaciones
      </TabPanel>
    </div>
  );
}
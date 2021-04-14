import React,{useState,useEffect} from "react";
// react plugin for creating charts
import {Pie,Bar,Line,Polar} from 'react-chartjs-2'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility"
// core components
import GridItem from "components/dashboard/Grid/GridItem.js";
import GridContainer from "components/dashboard/Grid/GridContainer.js";
import Card from "components/dashboard/Card/Card.js";
import CardHeader from "components/dashboard/Card/CardHeader.js";
import CardIcon from "components/dashboard/Card/CardIcon.js"
import CardBody from "components/dashboard/Card/CardBody.js";
import CardFooter from "components/dashboard/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const GraphCircular = ({data}) => {
    
    const classes = useStyles();

    const [pieData, setPieData] = useState({});
    const [barData, setBarData] = useState({});
    const [lineData, setLineData] = useState({});

    useEffect(() => {
      setPieData({
        labels: ['declined', 'accepted', 'goterror', 'inprogress'],
        datasets: [
          {
            data: [20,20,20,20],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
          },
        ],
      });

      setBarData({
        labels: ['declined', 'accepted', 'goterror', 'inprogress'],
        datasets: [
          {
            data: [30,50,30,70],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
          },
        ],
      });

      setLineData({
        labels: ['declined', 'accepted', 'goterror', 'inprogress'],
        datasets: [
          {
            data: [30,50,70,20],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
          },
        ],
      });

    }, [data]);
    
    return (
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total</p>
              <h3 className={classes.cardTitle}>12</h3>
            </CardHeader>
            <CardBody>
              <Pie  data={pieData} options={{ responsive: true }}/>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total</p>
              <h3 className={classes.cardTitle}>12</h3>
            </CardHeader>
            <CardBody>
              <Bar  data={barData} options={{ responsive: true }}/>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total</p>
              <h3 className={classes.cardTitle}>12</h3>
            </CardHeader>
            <CardBody>
              <Line  data={lineData} options={{ responsive: true }}/>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total</p>
              <h3 className={classes.cardTitle}>12</h3>
            </CardHeader>
            <CardBody>
              <Polar  data={lineData} options={{ responsive: true }}/>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      );
}

export default GraphCircular

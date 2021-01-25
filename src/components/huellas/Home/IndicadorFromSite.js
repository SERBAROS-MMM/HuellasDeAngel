import React,{useState,useEffect} from 'react'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles"

// @material-ui/icons

import Update from "@material-ui/icons/Update"

import Accessibility from "@material-ui/icons/Accessibility"

// core components
import GridItem from "components/dashboard/Grid/GridItem.js"
import Card from "components/dashboard/Card/Card.js"
import CardHeader from "components/dashboard/Card/CardHeader.js"
import CardIcon from "components/dashboard/Card/CardIcon.js"
import CardFooter from "components/dashboard/Card/CardFooter.js"
import {HTTP_CONSTANTS} from '../../../config/http-constants'
import {requestHttp} from '../../../config/http-server'
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js"


const useStyles = makeStyles(styles)

const IndicadorFromSite = ({fromSite}) => {
  const classes = useStyles()

  const [indTotal,setIndTotal] = useState(0)

  const getCountTotal = async (data) =>{
    try {
      const endpoint = HTTP_CONSTANTS.persons+HTTP_CONSTANTS.indicadores
      const response = await requestHttp('post',endpoint,data)
      console.log(data,response)
      if (response.status === 200) {
        setIndTotal(response.response)
      } 
    }
    catch (err) { 
      console.log(err)  
    } 
  }

  useEffect(() => {
    const data = {
        "param":"fromSite",
        "value":fromSite._id
    }
    getCountTotal( data)
    return () => {}
    // eslint-disable-next-line
  }, [])

  return (
        <GridItem xs={12} sm={6} md={3} >
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>{fromSite.name}</p>
              <h3 className={classes.cardTitle}>{indTotal}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
  )

}


export default IndicadorFromSite
import React, {useState,useEffect} from "react"

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles"

// @material-ui/icons

import Update from "@material-ui/icons/Update"

import Accessibility from "@material-ui/icons/Accessibility"

// core components
import GridItem from "components/dashboard/Grid/GridItem.js"
import GridContainer from "components/dashboard/Grid/GridContainer.js"
import Card from "components/dashboard/Card/Card.js"
import CardHeader from "components/dashboard/Card/CardHeader.js"
import CardIcon from "components/dashboard/Card/CardIcon.js"
import CardFooter from "components/dashboard/Card/CardFooter.js"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js"
import {HTTP_CONSTANTS} from '../../../config/http-constants'
import {requestHttp} from '../../../config/http-server'

import IndicadorFromSite from './IndicadorFromSite'

const useStyles = makeStyles(styles)

const Indicadores = () => {
  const classes = useStyles()

  const [fromSitesList, setFromSitesList] =useState([])
  const [indTotal,setIndTotal] = useState(0)

  const getListFromSites = async () =>{
    try {
      const endpoint = HTTP_CONSTANTS.fromSites
      const response = await requestHttp('get',endpoint)
      if (response.status === 200) {

        setFromSitesList (response.response)
      } 
    }
    catch (err) {
    console.log(err)
    } 
  }

  const getCountTotal = async () =>{
    try {
      const endpoint = HTTP_CONSTANTS.persons+HTTP_CONSTANTS.indicadores
      const response = await requestHttp('post',endpoint)
      if (response.status === 200) {
        setIndTotal(response.response)
      } 
    }
    catch (err) {
    console.log(err)
    } 
  }

  useEffect(() => {
    getListFromSites()
    getCountTotal()
    return () => {}
  }, [])


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total</p>
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
        {fromSitesList.map((item,key)=> 
          <IndicadorFromSite fromSite = {item}  key = {key} />
        )
        }
      </GridContainer>
    </div>
  )
}

export default Indicadores
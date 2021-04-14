import React, {useState,useEffect} from "react"

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles"

// @material-ui/icons

import Update from "@material-ui/icons/Update"

import Accessibility from "@material-ui/icons/Accessibility"

// core components

import Card from "components/dashboard/Card/Card.js"
import CardHeader from "components/dashboard/Card/CardHeader.js"
import CardIcon from "components/dashboard/Card/CardIcon.js"
import CardFooter from "components/dashboard/Card/CardFooter.js"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js"
import {HTTP_CONSTANTS} from '../../../config/http-constants'
import {requestHttp} from '../../../config/http-server'

import IndicadorFromSite from './IndicadorFromSite'

const useStyles = makeStyles(styles)

const config = {
  arrows: false,
  dots: false,
  infinite: true,
  //autoplay: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  //initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        //initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };


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
    <Slider {...config} >
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
       
        {fromSitesList.map((item,key)=> 
          <IndicadorFromSite fromSite = {item}  key = {key} />
        )
        }
        </Slider>
  )
}

export default Indicadores
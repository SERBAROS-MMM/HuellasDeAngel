import React,{useState,useEffect} from 'react';
import GridList from '@material-ui/core/GridList';
import GridItem from "components/dashboard/Grid/GridItem.js";
import Card from "components/dashboard/Card/Card.js";
import GridContainer from "components/huellas/Person/GridContainer.js";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {HTTP_CONSTANTS} from './../../../config/http-constants'
import {requestHttp} from './../../../config/http-server'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardHeader from "components/huellas/Person/CardHeader.js";
import CardBody from "components/huellas/Person/CardBody.js";
import Typography from '@material-ui/core/Typography'

const useStyles  = makeStyles((theme) => ({
  paper: {
    maxWidth: 'auto',
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addNews: {
    marginRight: theme.spacing(1),
  },
  paperChip: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },  
  addNews2: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },  
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
}));



export default function FindNew () {

  const classes = useStyles();
  
  const [filterPersons, setFilterPersons] = useState("")
  
  const [boy, setBoy] = useState('');   
  
  const [persons, setPersons] = useState([])

  const [existPersons, setExistPersons] = useState(false)

  const [searchBy, setSearchBy] = useState('')

  const [hoy, setHoy] = useState('')  

  const buscarPor = ["Fecha","Niño"]
  
  const aux=['1']

  const [novedades,setNovedades]=useState([])

  const getPersons=async()=>{
    try {
          const endpoint=HTTP_CONSTANTS.persons
          const response=await requestHttp('get',endpoint)
          setPersons(response.response)
        } catch (error) {
          console.error('error.getPersons:',error)
        }
  }

  useEffect(() => {
    
    return () => {
      
    }
  }, [existPersons,setFilterPersons])

  useEffect(() => {
    if (persons.length >0){
        setExistPersons(true)
    }else{
      setExistPersons(false)
    }
    return () => {}
    }, [persons])

  const getPersonsFiltered = async () =>{

    const endpoint=HTTP_CONSTANTS.personsfilter+filterPersons
    const response=await requestHttp('get',endpoint)
    const auxPersons=persons
    auxPersons.push(response.response)
    setPersons(auxPersons)
  }

const getFilterPersons=async()=>{
  try { 
    if(filterPersons !==''){ 
      await getPersonsFiltered()
    }else{
      await getPersons()
    }
  } catch (error) {
    console.error('error.getFilterPersons:',error)      
  }
  }

  useEffect(() => {    

    getFilterPersons()
    return () => {}
    // eslint-disable-next-line
    }, [filterPersons])
  
  useEffect(() => {
    
    var f = new Date()
    const fhoy = f.getFullYear() +"-"+ ((f.getMonth() +1)>9?(f.getMonth() +1):'0'+(f.getMonth() +1))+ "-" + ( f.getDate() >9? f.getDate():'0'+f.getDate())
    setHoy(fhoy)
    return () => {}
    }, [])
  
    const getNewsByDay = async () =>{

        try {
          const endpoint=HTTP_CONSTANTS.news+'day/'+hoy+"T00:00:00.000Z"
          const response=await requestHttp('get',endpoint)
          console.log(endpoint,response)
          setNovedades(response.response)
        } catch (error) {
          console.error('error.getPersons:',error)
        }
      }

    const searchByDayHandler=()=>{
        getNewsByDay()
        console.log(novedades)
    }

  return (
  <div className={classes.contentWrapper}>
          <GridList className={classes.gridList} cellHeight={'auto'} cols={1} >
          <Card>
          <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
                            <TextField
                            label="Buscar por:"
                            id="searchBy"
                            select                    
                            value={searchBy}                      
                            onChange={(e) => setSearchBy(e.target.value)}
                            fullWidth                           
                          >
                          {buscarPor.map((item,key) => (
                           <MenuItem key={item._id} value={item}>
                                {item}
                           </MenuItem>
                          ))}
                          </TextField>
                          </GridItem>
            {
          aux.map((item,key) => {
            switch (searchBy) {
                case 'Niño':return(
                    <>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                        id="standard-select-currency"
                        select
                        label="Nombre"
                        value={boy}
                        onChange={(e)=>setBoy(e.target.value)}
                        helperText="Por favor seleccione un niño"
                        >
                        {persons.map((item,key) => (
                            <MenuItem key={item._id} value={item}>
                            {item.name + " " + item.lastName1 + " " + item.lastName2}
                            </MenuItem>
                        ))}
                        </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <Button variant="contained" color="primary" className={classes.addNews2} /*onClick={addNewHandler}*/>
                      Buscar
                    </Button>          
                    </GridItem>
                    </>
                )
                
                case 'Fecha':return(
                    <>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                                    value ={hoy} 
                                    label="Fecha"
                                    id="fecha"                    
                                    type="date"
                                    className={classes.textField}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"                         
                                    onChange={(e) => setHoy(e.target.value)}
                                    />
                              
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <Button variant="contained" color="primary" className={classes.addNews2} onClick={searchByDayHandler}>
                      Buscar
                    </Button>                    
                    </GridItem>
                    </>
                
                )   
            }
        })
    }
            </GridContainer>
         </Card>
    </GridList>
       
    {novedades.map((item,key) =>(
        <GridContainer>
            <Card>
                <CardHeader color="primary">                            
                    <h4 className={classes.cardTitleWhite}>{item.persons}</h4>                            
                </CardHeader>
                <CardBody>
                    <Typography variant="h8" color="initial">{item.new} </Typography>
                </CardBody>
            </Card>
        </GridContainer>    
            )
        )
    }
  </div>
  )
  
}

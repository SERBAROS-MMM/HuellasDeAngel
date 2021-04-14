import React,{useState,useEffect} from 'react';
import GridList from '@material-ui/core/GridList';
import GridItem from "components/dashboard/Grid/GridItem.js";
import Card from "components/dashboard/Card/Card.js";
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/huellas/Person/GridContainer.js";
import TextField from '@material-ui/core/TextField';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import MenuItem from '@material-ui/core/MenuItem';
import {HTTP_CONSTANTS} from './../../../config/http-constants'
import {requestHttp} from './../../../config/http-server'
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
}));



export default function CreateNew () {

  const classes = useStyles();
  
  const [filterPersons, setFilterPersons] = useState("")
  
  const [boy, setBoy] = useState('');   
  
  const [persons, setPersons] = useState([])

  const [existPersons, setExistPersons] = useState(false)

  const [arrBoys,setArrBoys] = useState([])

  const [bandera, setBandera] = useState(false)

  const [novedad, setNovedad] = useState('')

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
    bandera
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

    useEffect(() => {
      if (arrBoys.length > 0){
          setBandera(true)
      }else{
        setBandera(false)
      }
      return () => {}
      }, [arrBoys])

    
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

  const [hoy, setHoy] = useState('')
  
  useEffect(() => {
    
    var f = new Date()
    const fhoy = f.getFullYear() +"-"+ ((f.getMonth() +1)>9?(f.getMonth() +1):'0'+(f.getMonth() +1))+ "-" + ( f.getDate() >9? f.getDate():'0'+f.getDate())
    setHoy(fhoy)
    return () => {}
    }, [])
  
  const addBoy=()=>{  
    
    const auxArrBoys=arrBoys
    auxArrBoys.push({
      key: arrBoys.length + 1,
      label: boy.name + " " + boy.lastName1 + " " + boy.lastName2,
      boy
      
  })

  setArrBoys(auxArrBoys)

  setBandera(true)

  const auxPersons = persons.filter((item)=>{

    const nombreCompleto=item._id

    return (nombreCompleto !== boy._id)
  
  }
  )
  setPersons(auxPersons)
  
  }

  const deleteBoy=(boyDelete)=>()=>{  
   
    const auxArrBoys=arrBoys.filter((item)=>{
      return(
        item.boy._id !== boyDelete.boy._id
      )
    })

  setArrBoys(auxArrBoys)

  returnBoy(boyDelete.boy)
  
  }  

  const returnBoy =(boyReturn)=> {
    const auxPersons=persons
    auxPersons.push(boyReturn)
    setPersons(auxPersons)
    
  }

  const addNewHandler=(e)=>{
    
    e.preventDefault();
    const auxIds=[]
    arrBoys.map((item)=>{
      auxIds.push(item.boy._id)
    }
    )
    const data = {
      day:hoy,
      new:novedad,
      persons:auxIds
    }
    AddNewsRequest(data)
  }
  
  const AddNewsRequest = async (data) =>{
    try {
      const endpoint=HTTP_CONSTANTS.news
      const response=await requestHttp('post',endpoint,data)
      if(response.status===201)
      {
        setNovedad('')

        arrBoys.map((item)=>{
          returnBoy(item.boy)      
        })
    
      setArrBoys([])
      }
    } catch (error) {
      console.error('error.getPersons:',error)
    }
  }
  return (
  <div className={classes.contentWrapper}>
          <GridList className={classes.gridList} cellHeight={'auto'} cols={1} >
          <Card>
          <GridContainer>          
          <GridItem xs>
              <TextField
              id="standard-select-currency"
              select
              label="Nombre"
              value={boy}
              onChange={(e)=>setBoy(e.target.value)}
              helperText="Por favor seleccione un niño"
            >
              {persons.map((item) => (
                <MenuItem key={item._id} value={item} >
                  {item.name + " " + item.lastName1 + " " + item.lastName2}
                </MenuItem>
              ))}
            </TextField>
            </GridItem>

            <GridItem>
              <IconButton 
              variant="contained" 
              color="primary"
              size="large"
              className={classes.addNews} 
              onClick={addBoy}
              >
                <AddCircleSharpIcon fontSize="large" />
              </IconButton>
            </GridItem>
            </GridContainer>
            <Paper component="ul" className={classes.paperChip}>            
            {arrBoys.map((item) => (
              <li key={item.key}>              
              <Chip              
              label={item.label}
              onDelete={deleteBoy(item)}
              className={classes.chip}             
            /> 
              </li>
            ))
            }
            </Paper>
            <GridContainer>  
          <GridItem xs={12} sm={12} md={3}>
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
          <GridItem xs={12} sm={12} md={12}>          
          <TextField
                  value={novedad}
                  label="Novedad"               
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={(e)=>setNovedad(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
          </GridItem>
          <GridItem>
              <Button variant="contained" color="primary" className={classes.addNews2} onClick={addNewHandler}>
                Agregar
              </Button>          
          </GridItem>
          </GridContainer>
          
              
              </Card>
          </GridList>   
  </div>
  )

}

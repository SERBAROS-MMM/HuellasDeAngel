import React,{useState,useEffect} from 'react';
import GridList from '@material-ui/core/GridList';
import GridItem from "components/dashboard/Grid/GridItem.js";
import Card from "components/dashboard/Card/Card.js";
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/huellas/Person/GridContainer.js";
import TextField from '@material-ui/core/TextField';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import MenuItem from '@material-ui/core/MenuItem';
import {HTTP_CONSTANTS} from './../../config/http-constants'
import {requestHttp} from './../../config/http-server'
import ChipNews from 'components/huellas/Novedades/ChipsNews'
import Paper from '@material-ui/core/Paper';
import { isTemplateExpression } from 'typescript';
import Chip from '@material-ui/core/Chip';

const styles = (theme) => ({
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
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
});



export default function NewsPage () {

  const classes = styles;
  
  const [filterPersons, setFilterPersons] = useState("")
  
  const [boy, setBoy] = useState('');   
  
  const [persons, setPersons] = useState([])

  const [existPersons, setExistPersons] = useState(false)

  const [arrBoys,setArrBoys] = useState([])

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
    console.log(response)
    setPersons(response.response)
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
    }, [filterPersons])

  const [hoy, setHoy] = useState('')
  
  useEffect(() => {
    
    var f = new Date()
    const fhoy = f.getFullYear() +"-"+ ((f.getMonth() +1)>9?(f.getMonth() +1):'0'+(f.getMonth() +1))+ "-" + ( f.getDate() >9? f.getDate():'0'+f.getDate())
    setHoy(fhoy)
    return () => {}
    }, [])
  
  const addBoy=()=>{  
    
    console.log('addBoy',arrBoys)
    const auxArrBoys=arrBoys
    auxArrBoys.push({
      key: arrBoys.length + 1,
      label: boy
  })
  setArrBoys(auxArrBoys)
  getPersons()
  }

  const deleteBoy=(boyDelete)=>{  
        
    const auxArrBoys=arrBoys
    for (let i=0;i<arrBoys.length;i++){
      if (auxArrBoys[i].label == boyDelete.label){
        auxArrBoys.splice(i,1)
      }
    }
  setArrBoys(auxArrBoys)
  getPersons()
  }
  
  /*const arrBoys = [
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ];*/ 
  

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
              {persons.map((item,key) => (
                <MenuItem key={item.key} value={item.name + " " + item.lastName1 + " " + item.lastName2}>
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
            {arrBoys.map((item,key) => (
              <li key={item.key}>
              {/*<ChipNews key= {key} boy= {item} onDeleted={deleteBoy}/>
              <Chip
              label={item.label}
              onDelete={deleteBoy(item)}
              className={classes.chip}              
            />*/}
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
          </GridContainer>
          
              
              </Card>
          </GridList>   
  </div>
  )

}

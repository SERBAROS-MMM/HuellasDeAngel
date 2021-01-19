

export const BOYS = [
    {
        name:'JUAN FERNANDO',
        lastName1:'PEREZ LOPEZ',
        lastName2:'',
        age:'10',
        gender: 'MAS',
        image:'https://thispersondoesnotexist.com/image',
        typeIdent: "TI",
        ident: "10005648"
    },
    {
        name:'MARIA EUGENIA',
        lastName1:'MARTINEZ RODRIGUEZ',
        lastName2:'',
        age:'15',
        gender: 'FEM',
        image:'https://thispersondoesnotexist.com/image',
        typeIdent: "TI",
        ident: "10008794"
    },
    {
        name:'ALEJANDRO JOSE',
        lastName1:'FERNANDEZ GARCIA',
        lastName2:'',
        age:'17',
        gender: 'MAS',
        image:'https://thispersondoesnotexist.com/image',
        typeIdent: "TI",
        ident: "1000362563"
    },
]

export const EVALUATIONS = [

    {   id : 0,
		nombreEvaluacion: 'Psicologica',
		Pasos: [ {
					nombrePaso: 'Motivo Ingreso',
					campos : [{ 
                        nombreCampo:'Motivo referido en la ficha de ingreso' ,
                        typeCampo: 'Text'	
                    },
                    { 
                        nombreCampo: 'Referido por el Usuario',
                        typeCampo: 'Text'									
                    }
                    ]
                    },
                 {
					nombrePaso: 'Examen Mental',
					campos : [{ 
                                nombreCampo:'Porte y actitud' ,	
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Conciencia',
                                typeCampo: 'Text'								
							},
							{ 
                                nombreCampo: 'Atencion' ,
                                typeCampo: 'Text'	
							},
						]
				},]								
    },
    {
        id : 1,
		nombreEvaluacion: 'Fisica',
		Pasos: [ {
					nombrePaso: 'Datos Basico Adicionales',
					campos : [{ 
                        nombreCampo:'Fecha Valoracion' ,
                        typeCampo: 'Date'	
                    }
                    ]
                    },
                 {
					nombrePaso: 'Examen Fisico',
					campos : [{ 
                                nombreCampo:'Condiciones Generales' ,	
                                typeCampo: 'Text'
							},
							{ 
                                nombreCampo: 'Cabeza',	
                                typeCampo: 'Input'							
							},
							{ 
                                nombreCampo: 'Cuello' ,
                                typeCampo: 'Input'
							},
						]
				},]								
    },
    
]


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
		Pasos: [ 
            {
                nombrePaso: 'Datos Basico Adicionales',
                campos : [{ 
                nombreCampo:'Fecha Valoracion' ,
                typeCampo: 'Date'	
                }
                ]
            },
            {
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
                                nombreCampo: 'Atención',
                                typeCampo: 'Text'								
							},
							{ 
                                nombreCampo: 'Conciencia' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Orientación' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Sensopercepción' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Memoria' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Lenguaje' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Pensamiento' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Afecto' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Juicio' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Prospección' ,
                                typeCampo: 'Text'	
							},
							{ 
                                nombreCampo: 'Sueño' ,
                                typeCampo: 'Text'	
							},
						]
                },
                {
					nombrePaso: 'Historia Personal y Familiar',
					campos : [{ 
                        nombreCampo:'' ,
                        typeCampo: 'Text'	
                    }
                    ]
                },
                {
					nombrePaso: 'Antecedentes',
					campos : [{ 
                        nombreCampo:'' ,
                        typeCampo: 'Text'	
                    }
                    ]
                },
                {
					nombrePaso: 'Valoración por áreas',
					campos : [{ 
                        nombreCampo:'Área Cognitiva / adaptativa',
                        typeCampo: 'Text'	
                    },
                    { 
                        nombreCampo:'Área Emocional / Afectiva',
                        typeCampo: 'Text'	
                    },
                    { 
                        nombreCampo:'Área Sensorio-motriz',
                        typeCampo: 'Text'	
                    },
                    { 
                        nombreCampo:'Área del Lenguaje',
                        typeCampo: 'Text'	
                    }
                    ]
                },
                {
					nombrePaso: 'Hipótesis Diagnóstica',
					campos : [{ 
                        nombreCampo:'' ,
                        typeCampo: 'Text'	
                    }
                    ]
                },
                {
					nombrePaso: 'Recomendaciones',
					campos : [{ 
                        nombreCampo:'' ,
                        typeCampo: 'Text'	
                    }
                    ]
                },
            ]								
    },
    {
        id : 1,
		nombreEvaluacion: 'Enfermería',
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
							{ 
                                nombreCampo: 'Cardiovascular' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'Abdomen' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'Extremidades' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'Peso' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'Talla' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'T/A' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'FC' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'FR' ,
                                typeCampo: 'Input'
							},
							{ 
                                nombreCampo: 'Cardiovascular' ,
                                typeCampo: 'T'
							},
						]
				},
                {
					nombrePaso: 'Observaciones',
					campos : [{ 
                        nombreCampo:'' ,
                        typeCampo: 'Text'	
                    }
                    ]
                }]								
    },
    {
        id : 2,
		nombreEvaluacion: 'Sociofamiliar',
		Pasos: [ {
					nombrePaso: 'Datos Basico Adicionales',
					campos : [{ 
                        nombreCampo:'Fecha Valoracion' ,
                        typeCampo: 'Date'	
                    },
                    { 
                        nombreCampo:'Dirección' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Escolaridad' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Tipo de afiliación a salud y EPS' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Número de hermanos' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Hijo número' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Idioma/dialecto' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Grupo étnico' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Persona o familiar de contacto' ,
                        typeCampo: 'Input'	
                    },
                    { 
                        nombreCampo:'Teléfono' ,
                        typeCampo: 'Input'	
                    }
                    ]
                    },
                 {
					nombrePaso: 'Composición familiar',
					campos : [{ 
                                nombreCampo:'' ,	
                                typeCampo: 'Text'
							}
						]
				},
                {
					nombrePaso: 'Genograma familiar',
					campos : [{ 
                        nombreCampo:'',
                        typeCampo: 'Input'	
                    }
                    ]
                },
                {
					nombrePaso: 'Situaciones de vulneración de derechos identificadas al ingreso familiar',
					campos : [{ 
                        nombreCampo:'',
                        typeCampo: 'Text'	
                    }
                    ]
                },
                {
                   nombrePaso: 'Factores de vulnerabilidad y generatividad',
                   campos : [{ 
                               nombreCampo:'Factores de Vulnerabilidad' ,	
                               typeCampo: 'Text'
                           },
                           { 
                            nombreCampo:'Factores de Generatividad' ,	
                            typeCampo: 'Text'
                        }
                       ]
               },
               {
                   nombrePaso: 'Observación diagnóstica',
                   campos : [{ 
                       nombreCampo:'',
                       typeCampo: 'Text'	
                   }
                   ]
               },
               {
                   nombrePaso: 'Recomendaciones',
                   campos : [{ 
                       nombreCampo:'',
                       typeCampo: 'Text'	
                   }
                   ]
               }
            ]								
    },
    
]
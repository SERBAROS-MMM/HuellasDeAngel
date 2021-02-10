

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

    {   _id: "0",
        nameEvaluation:"Psicologica",
		Steps: [ 
            {
                nameStep: "Datos Basico Adicionales",
                orderStep: 1,
                Fields : [{ 
                    nameField:"Fecha Valoracion" ,
                    typeField: "Date"	,
                    orderField:1
                }
                ]
            },
            {
				nameStep: "Motivo Ingreso",
                orderStep: 2,
				Fields : [{ 
                    nameField:"Motivo referido en la ficha de ingreso" ,
                    typeField: "Text"	,
                    orderField:1
                },
                { 
                        nameField: "Referido por el Usuario",
                        typeField: "Text",
                        orderField:2									
                    }
                    ]
                    },
                 {
					nameStep: "Examen Mental",
                    orderStep:3,
					Fields : [{ 
                                nameField:"Porte y actitud" ,	
                                typeField: "Text"	,
                                orderField:1
							},
							{ 
                                nameField: "Atención",
                                typeField: "Text"			,
                                orderField:2					
							},
							{ 
                                nameField: "Conciencia" ,
                                typeField: "Text"	,
                                orderField:3
							},
							{ 
                                nameField: "Orientación" ,
                                typeField: "Text"	,
                                orderField:4
							},
							{ 
                                nameField: "Sensopercepción" ,
                                typeField: "Text"	,
                                orderField:5
							},
							{ 
                                nameField: "Memoria" ,
                                typeField: "Text"	,
                                orderField:6
							},
							{ 
                                nameField: "Lenguaje" ,
                                typeField: "Text"	,
                                orderField:7
							},
							{ 
                                nameField: "Pensamiento" ,
                                typeField: "Text"	,
                                orderField:8
							},
							{ 
                                nameField: "Afecto" ,
                                typeField: "Text"	,
                                orderField:9
							},
							{ 
                                nameField: "Juicio" ,
                                typeField: "Text"	,
                                orderField:10
							},
							{ 
                                nameField: "Prospección" ,
                                typeField: "Text"	,
                                orderField:11
							},
							{ 
                                nameField: "Sueño" ,
                                typeField: "Text"	,
                                orderField:12
							}
						]
                },
                {
					nameStep: "Historia Personal y Familiar",
                    orderStep:4,
					Fields : [{ 
                        nameField:"" ,
                        typeField: "Text"	,
                        orderField:1
                    }
                    ]
                },
                {
					nameStep: "Antecedentes",
                    orderStep: 5,
					Fields : [{ 
                        nameField:"" ,
                        typeField: "Text"	,
                        orderField:1
                    }
                    ]
                },
                {
					nameStep: "Valoración por áreas",
                    orderStep:6,
					Fields : [{ 
                        nameField:"Área Cognitiva / adaptativa",
                        typeField: "Text"	,
                        orderField:1
                    },
                    { 
                        nameField:"Área Emocional / Afectiva",
                        typeField: "Text"	,
                        orderField:1
                    },
                    { 
                        nameField:"Área Sensorio-motriz",
                        typeField: "Text"	,
                        orderField:1
                    },
                    { 
                        nameField:"Área del Lenguaje",
                        typeField: "Text"	,
                        orderField:1
                    }
                    ]
                },
                {
					nameStep: "Hipótesis Diagnóstica",
                    orderStep: 7,
					Fields : [{ 
                        nameField:"" ,
                        typeField: "Text"	,
                        orderField:1
                    }
                    ]
                },
                {
					nameStep: "Recomendaciones",
                    orderStep: 8,
					Fields : [{ 
                        nameField:"" ,
                        typeField: "Text"	,
                        orderField:1
                    }
                    ]
                }
            ]								
    },
    {
        _id : "1",
		nameEvaluation: 'Enfermería',
		Steps: [ {
                    nameStep: 'Datos Basico Adicionales',
                    orderStep: 1,
					Fields : [{ 
                        nameField:'Fecha Valoracion' ,
                        typeField: 'Date'	,
                        orderField:1
                    }
                    ]
                    },
                 {
					nameStep: 'Examen Fisico',
					Fields : [{ 
                                nameField:'Condiciones Generales' ,	
                                typeField: 'Text',
                                orderField:1
							},
							{ 
                                nameField: 'Cabeza',	
                                typeField: 'Input'		,
                                orderField:2					
							},
							{ 
                                nameField: 'Cuello' ,
                                typeField: 'Input',
                                orderField:3
							},
							{ 
                                nameField: 'Cardiovascular' ,
                                typeField: 'Input',
                                orderField:4
							},
							{ 
                                nameField: 'Abdomen' ,
                                typeField: 'Input',
                                orderField:5
							},
							{ 
                                nameField: 'Extremidades' ,
                                typeField: 'Input',
                                orderField:6
							},
							{ 
                                nameField: 'Peso' ,
                                typeField: 'Input',
                                orderField:7
							},
							{ 
                                nameField: 'Talla' ,
                                typeField: 'Input',
                                orderField:8
							},
							{ 
                                nameField: 'T/A' ,
                                typeField: 'Input',
                                orderField:9
							},
							{ 
                                nameField: 'FC' ,
                                typeField: 'Input',
                                orderField:10
							},
							{ 
                                nameField: 'FR' ,
                                typeField: 'Input',
                                orderField:11
							},
							{ 
                                nameField: 'Cardiovascular' ,
                                typeField: 'T',
                                orderField:12
							},
						]
				},
                {
                    nameStep: 'Observaciones',
                    orderStep: 2,
					Fields : [{ 
                        nameField:'' ,
                        typeField: 'Text'	,
                        orderField:1
                    }
                    ]
                }]								
    },
    {
        id : 2,
		nameEvaluation: 'Sociofamiliar',
		Steps: [ {
                    nameStep: 'Datos Basico Adicionales',
                    orderStep: 1,
					Fields : [{ 
                        nameField:'Fecha Valoracion' ,
                        typeField: 'Date'	,
                        orderField:1
                    },
                    { 
                        nameField:'Dirección' ,
                        typeField: 'Input'	,
                        orderField:2
                    },
                    { 
                        nameField:'Escolaridad' ,
                        typeField: 'Input'	,
                        orderField:3
                    },
                    { 
                        nameField:'Tipo de afiliación a salud y EPS' ,
                        typeField: 'Input'	,
                        orderField:4
                    },
                    { 
                        nameField:'Número de hermanos' ,
                        typeField: 'Input'	,
                        orderField:5
                    },
                    { 
                        nameField:'Hijo número' ,
                        typeField: 'Input'	,
                        orderField:6
                    },
                    { 
                        nameField:'Idioma/dialecto' ,
                        typeField: 'Input'	,
                        orderField:7
                    },
                    { 
                        nameField:'Grupo étnico' ,
                        typeField: 'Input'	,
                        orderField:8
                    },
                    { 
                        nameField:'Persona o familiar de contacto' ,
                        typeField: 'Input'	,
                        orderField:9
                    },
                    { 
                        nameField:'Teléfono' ,
                        typeField: 'Input'	,
                        orderField:10
                    }
                    ]
                    },
                 {
                    nameStep: 'Composición familiar',
                    orderStep: 2,
					Fields : [{ 
                                nameField:'' ,	
                                typeField: 'Text',
                                orderField:1
							}
						]
				},
                {
                    nameStep: 'Genograma familiar',
                    orderStep: 3,
					Fields : [{ 
                        nameField:'',
                        typeField: 'Input'	,
                        orderField:1
                    }
                    ]
                },
                {
                    nameStep: 'Situaciones de vulneración de derechos identificadas al ingreso familiar',
                    orderStep: 4,
					Fields : [{ 
                        nameField:'',
                        typeField: 'Text'	,
                        orderField:1
                    }
                    ]
                },
                {
                   nameStep: 'Factores de vulnerabilidad y generatividad',
                   orderStep: 5,
                   Fields : [{ 
                               nameField:'Factores de Vulnerabilidad' ,	
                               typeField: 'Text',
                               orderField:1
                           },
                           { 
                            nameField:'Factores de Generatividad' ,	
                            typeField: 'Text',
                            orderField:2
                        }
                       ]
               },
               {
                   nameStep: 'Observación diagnóstica',
                   orderStep: 6,
                   Fields : [{ 
                       nameField:'',
                       typeField: 'Text'	,
                       orderField:1
                   }
                   ]
               },
               {
                   nameStep: 'Recomendaciones',
                   orderStep: 7,
                   Fields : [{ 
                       nameField:'',
                       typeField: 'Text'	,
                       orderField:1
                   }
                   ]
               }
            ]								
    },
    
    
]

export const PLACES = ['Comisaría 1','Comisaría 2','Comisaría 3','Comisaría 4']
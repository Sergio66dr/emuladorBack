module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTU0NzAwNzYsImV4cCI6MTU0NjkxOTY3NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0._A7pY7lDS3-43R68XFLPUSspUVmyi9fleksPzLifcqI',
    workflow: {
        APPBOOT: 'AUT004',
        CRE180: 'CRE011',
        CRE011: 'ING001'
    },
    AUT004: {
        status: 1,
        payload: {catalogo: {
            modulo: 'LIBCAM',
            lenguaje: 'ES',
            canal: '1',
            aliado: 'N/A',
            pais: 'CR'
        },
            "cr": {
                "AUTORIZACION_CONSULTA_DE_INFORMACION_CREDITICIA": {
                    "cliente": {
                        "cargo": "1 ",
                        "nombreCompleto": "STEPHANNY MICHELLE ROJAS MASIS",
                        "nombreEmpresaCliente": {
                            "nombre": "nombreempresa ",
                            "numeroEmpleados": "",
                            "fechaInicio": "1999 - 10 - 10 ",
                            "direccion": "",
                            "codigoCiudad": "",
                            "codigoDepartamento": "",
                            "codigoMunicipio": "",
                            "codigoPais": "",
                            "referenciaDireccion": "",
                            "nombreColonia": "",
                            "esPrincipal": false,
                            "tipoContrato": "",
                            "actividadEmpresa": "",
                            "codigo": "",
                            "nit": "123.3434 .34 ",
                            "telefono": {
                                "extension": "",
                                "indicativo": "",
                                "numero": ""
                            }
                        },
                        "numeroId": "01-1185-0138",
                        "valFirma": ""
                    },
                    "credito": {
                        "fechaDelDia": "",
                        "horaDelDia": ""
                    },
                    "otraIdentificacion": {},
                    "seguro": {}
                },
                "CONTRATO_DE_PRESTAMO_MERCANTIL": {
                    "aceptacion": {
                        "Referencia": "",
                        "fechaO": ""
                    },
                    "aceptacionjd": {
                        "anioDesc": "",
                        "diaDesc": "",
                        "mesDesc": ""
                    },
                    "banco": {
                        "valFirma": ""
                    },
                    "cliente": {
                        "empresa": {
                            "nombre": "nombreempresa ",
                            "numeroEmpleados": "",
                            "fechaInicio": "1999 - 10 - 10 ",
                            "direccion": "",
                            "codigoCiudad": "",
                            "codigoDepartamento": "",
                            "codigoMunicipio": "",
                            "codigoPais": "",
                            "referenciaDireccion": "",
                            "nombreColonia": "",
                            "esPrincipal": false,
                            "tipoContrato": "",
                            "actividadEmpresa": "",
                            "codigo": "",
                            "nit": "123.3434 .34 ",
                            "telefono": {
                                "extension": "",
                                "indicativo": "",
                                "numero": ""
                            }
                        },
                        "nombreCompleto": "STEPHANNY MICHELLE ROJAS MASIS",
                        "numeroId": "01-1185-0138",
                        "residencia": {
                            "ciudadDesc": "",
                            "departamentoDesc": "3",
                            "direccion": "CARTAGO CENTRAL DULCE NOMBRE",
                            "distritoDesc": ""
                        },
                        "tipo": "",
                        "valFirma": ""
                    },
                    "credito": {
                        "Referencia": "",
                        "comisionMin": "",
                        "comisionTasaMax": "",
                        "cuotaInicial": "",
                        "cuotaQuincenal": "",
                        "cuotaSeguros": "",
                        "cuotaTotal": "",
                        "diaPago": "",
                        "fechaPrimerPago": "",
                        "fechaUltimoPago": "",
                        "montoDesc": "",
                        "montoDesembolso": "",
                        "plazoMesesDesc": "valor",
                        "tasaDiferencial": "",
                        "tasaEfectiva": "",
                        "tasaNominal": "",
                        "tipoTasa": ""
                    }
                },
                "DECLARACION_JURADA_DE_OTRAS_DEUDAS": {
                    "aceptacion": {
                        "fechaO": ""
                    },
                    "cliente": {
                        "marcaDeudas": "",
                        "nombreCompleto": "",
                        "valFirma": ""
                    },
                    "credito": {
                        "Referencia": ""
                    },
                    "deudas": {
                        "dcj_cuota": "",
                        "dcj_entidad": "",
                        "dcj_fechavenc": "",
                        "dcj_frec": "",
                        "dcj_monto": ""
                    },
                    "seguro": {
                        "idTomador": "",
                        "tomador": ""
                    }
                },
                "FOLLETO_EXPLICATIVO": {
                    "aceptacion": {
                        "fechaO": ""
                    },
                    "cliente": {
                        "valFirma": ""
                    },
                    "credito": {
                        "Referencia": "",
                        "montoDesembolso": ""
                    }
                },
                "LIBRANZA_CARTA_DE_AUTORIZACION_DE_DEBITO_PLANILLA": {
                    "aceptacionjd": {
                        "anioDesc": "",
                        "diaDesc": "",
                        "mesDesc": ""
                    },
                    "cliente": {
                        "nombreCompleto": "",
                        "numeroId": "",
                        "tipoId": "",
                        "valFirma": ""
                    },
                    "credito": {
                        "referencia": ""
                    },
                    "seguro": {
                        "fechaInicio": "",
                        "tomador": ""
                    }
                },
                "PAGARE": {
                    "cliente": {
                        "estadoCivil": "C",
                        "letrasId": "",
                        "nombreCompleto": "STEPHANNY MICHELLE ROJAS MASIS",
                        "numeroId": "01-1185-0138",
                        "profesionDesc": "228",
                        "residencia": {
                            "ciudadDesc": "",
                            "departamentoDesc": "3",
                            "distritoDesc": ""
                        },
                        "valFirma": ""
                    },
                    "credito": {
                        "Referencia": "",
                        "comision": "valor",
                        "comisionMin": "valor",
                        "comisionTasaMax": "valor",
                        "cuotaTotal": "valor",
                        "cuotaTotalDesc": "valor",
                        "fechaDelDia": "",
                        "montoDesc": "valor",
                        "montoDesembolso": "",
                        "numCuotas": "valor",
                        "plazoMesesDesc": "valor",
                        "tasaDiferencia": "valor",
                        "tasaReferencia": "valor"
                    }
                },
                "SOLICITUD_DE_ASEGURAMIENTO_UNIFICADA_SEGURO_COLECTIVO": {},
                "SOLICITUD_SEGURO_COLECTIVO_MOMENTOS_DE_VIDA_ASEGURADO": {
                    "aceptacion": {
                        "anioDesc": "",
                        "diaDesc": "",
                        "mesDesc": "",
                        "municipioDesc": ""
                    },
                    "aseguradora": {
                        "cobertura": "",
                        "nombre": "",
                        "suma": "",
                        "vigencia": ""
                    },
                    "beneficiario": {
                        "calidad": "",
                        "nombreCompleto": "",
                        "numeroId": "",
                        "parantesco": "",
                        "porcentaje": "",
                        "tipoId": ""
                    },
                    "cliente": {
                        "anioFechaNac": "",
                        "cargo": "",
                        "diaFechaNac": "",
                        "direccionPostal": "",
                        "email": "",
                        "estadoCasado": "",
                        "estadoDivorciado": "",
                        "estadoSeparado": "",
                        "estadoSoltero": "",
                        "estadoUnionLibre": "",
                        "estadoViudo": "",
                        "generoF": "",
                        "generoM": "",
                        "lugarNacimiento": "",
                        "mesFechaNac": "",
                        "movil": "",
                        "nacionalidad": "",
                        "nombreCompleto": "",
                        "nombreEmpresa": "",
                        "numeroId": "",
                        "otrosMedioNotificacion": "",
                        "primerApellido": "",
                        "primerNombre": "",
                        "profesionDesc": "",
                        "residencia": {
                            "ciudadDesc": "",
                            "direccionExacta": "",
                            "distritoDesc": ""
                        },
                        "segundoApellido": "",
                        "segundoNombre": "",
                        "telefono": "",
                        "tipoIdCI": "",
                        "tipoIdCJ": "",
                        "tipoIdCR": "",
                        "valFirma": ""
                    },
                    "cobertura": {
                        "enfermedad": {
                            "prima": "",
                            "sumaAsegurada": "",
                            "tasaAnual": ""
                        },
                        "incapacidad": {
                            "prima": "",
                            "sumaAsegurada": "",
                            "tasaAnual": ""
                        },
                        "momentos": {
                            "prima": "",
                            "sumaAsegurada": "",
                            "tasaAnual": ""
                        },
                        "muerte": {
                            "prima": "",
                            "sumaAsegurada": "",
                            "tasaAnual": ""
                        },
                        "muerteAc": {
                            "prima": "",
                            "sumaAsegurada": "",
                            "tasaAnual": ""
                        }
                    },
                    "credito": {
                        "Referencia": "",
                        "fechaAprobacion": "",
                        "planillaLibranza": "",
                        "planillaTarjetaHabiente": ""
                    },
                    "medioPago": {
                        "anioVencimiento": "",
                        "diaVencimiento": "",
                        "mesVencimiento": "",
                        "numeroProducto": "",
                        "tipoCA": "",
                        "tipoDS": "",
                        "tipoTC": ""
                    },
                    "seguro": {
                        "anioFinVigencia": "",
                        "anioFinVigenciaProp": "",
                        "anioInicioVigencia": "",
                        "anioInicioVigenciaProp": "",
                        "diaFinVigencia": "",
                        "diaFinVigenciaProp": "",
                        "diaInicioVigencia": "",
                        "diaInicioVigenciaProp": "",
                        "duracionSeguro": "",
                        "idTomador": "",
                        "marcaConozco": "",
                        "marcaExplicacion": "",
                        "mesFinVigencia": "",
                        "mesFinVigenciaProp": "",
                        "mesInicioVigenciaProp": "",
                        "monedaColones": "",
                        "monedaDolares": "",
                        "numeroPoliza": "",
                        "periodicidadA": "",
                        "periodicidadM": "",
                        "periodicidadO": "",
                        "periodicidadPagar": "",
                        "tomador": "",
                        "valorMaximoSeguro": "",
                        "valorOtrasCobertura": ""
                    }
                }
            },
            "cuentas": [
                {
                    "valAliasProducto": "CUENTA DE AHORRO",
                    "valCodigoProducto": "0102",
                    "valCodigoSubProducto": "0102001",
                    "valNumeroProducto": "0102001200300400",
                    "valMonedaProducto": "CRC"
                },
                {
                    "valAliasProducto": "CUENTA CORRIENTE",
                    "valCodigoProducto": "0103",
                    "valCodigoSubProducto": "0103001",
                    "valNumeroProducto": "0103001200300400",
                    "valMonedaProducto": "CRC"
                },
                {
                    "valAliasProducto": "CUENTA DE AHORRO",
                    "valCodigoProducto": "0104",
                    "valCodigoSubProducto": "0104001",
                    "valNumeroProducto": "0104001200300400",
                    "valMonedaProducto": "CRC"
                }
            ],
            "esCliente": true,
            "pa": {
                "ASEGURABILIDAD": "",
                "PAGARE": "",
                "PRODUCTOS_Y_SERVICIOS_BANCARIOS": ""
            },
            "seguros": {
                "aplica": "",
                "nombre": ""
            },
            "tieneProductos": ""
        }
    },
    AUT0024: {
        status: 1,
        payload: {
            catalogo: {
                modulo: 'LIBCAM',
                lenguaje: 'ES',
                canal: '1',
                aliado: 'N/A',
                pais: 'CR'
            },
            esCliente: true,
            seguros: [{
                nombre: "SMV",
                aplica: true
            }],
            cr: {
                LIBRANZA_CARTA_DE_AUTORIZACION_DE_DEBITO_PLANILLA: {
                    aceptacionjd: {
                        diaDesc: 18,
                        mesDesc: '04',
                        anioDesc: 1995
                    },
                    seguro: {
                        tomador: "tomador",
                        fechaInicio: new Date()
                    },
                    cliente: {
                        nombreCompleto: 'Sergio Rafael',
                        tipoId: 'IFE',
                        numeroId: '454545454',
                        valFirma: 'Firmado Electronicamente'
                    },
                    credito: {
                        referencia: 'LIBRANZA'
                    }
                },
                PAGARE: {
                    credito: {
                        Referencia: 'XXXXXX',
                        montoDesembolso: "654654",
                        montoDesc: '654654',
                        plazoMesesDesc: "65",
                        numCuotas: 12,
                        cuotaTotalDesc: '5645',
                        cuotaTotal: 654654,
                        fechaPrimerPago: new Date(),
                        fechaUltimoPago: new Date(),
                        periodoRevision: "12 meses",
                        tasaDiferencial: "21.213",
                        tasaReferencia: "**12.05",
                        comisionTasaMax: "12.05",
                        comision: '54',
                        comisionMin: "65465",
                        fechaDelDia: new Date()
                    },
                    cliente: {
                        nombreCompleto: "SERGIO MANJARREZ",
                        letrasId: "**asdasdasd",
                        numeroId: "4654654654",
                        profesionDesc: "**PROFESION",
                        estadoCivil: "**CODIGO CIVIL",
                        valFirma: "Firmado Digitalmente",
                        residencia: {
                            departamentoDesc: '**5555',
                            ciudadDesc: "**6666",
                            distritoDesc: "***3333"
                        }
                    }
                },
                FOLLETO_EXPLICATIVO: {
                    credito: {
                        Referencia: "Sergio",
                        montoDesembolso: 654654
                    },
                    cliente: {
                        valFirma: "firmado digitalmente"
                    },
                    aceptacion: {
                        fechaO: new Date()
                    }
                },
                DECLARACION_JURADA_DE_OTRAS_DEUDAS: {
                    aceptacion: {
                        fechaO: new Date(),
                    },
                    credito: {
                        Referencia: '65654654'
                    },
                    cliente: {
                        nombreCompleto: 'Sergio Rafael',
                        marcaDeudas: '54645',
                        valFirma: "firmado digitalmente"
                    },
                    seguro: {
                        tomador: 'Sergio Rafael',
                        idTomador: '654654'
                    },
                    deudas: [{
                        dcj_entidad: 1,
                        dcj_monto: 22222,
                        dcj_cuota: 33,
                        dcj_fechavenc: new Date(),
                        dcj_frec: "2"
                    }]
                },
                CONTRATO_DE_PRESTAMO_MERCANTIL: {
                    cliente: {
                        nombreCompleto: "SSSSSSS",
                        numeroId: "15995159",
                        residencia: {
                            departamentoDesc: "01",
                            ciudadDesc: "02",
                            distritoDesc: "03",
                            direccion: "iukjhk jkjhkjhkj"
                        },
                        tipo: "CED",
                        empresa: "EMPRESA",
                        valFirma: 'firmado Digitalmente'
                    },
                    banco: {
                        valFirma: 'firmado Digitalmente'
                    },
                    credito: {
                        Referencia: "sjdhskjdh kjshdksjd",
                        montoDesembolso: "656",
                        montoDesc: "SEICIENTOS CINCUNTA Y SEIS",
                        fechaUltimoPago: new Date(),
                        fechaPrimerPago: new Date(),
                        diaPago: new Date(),
                        plazoMesesDesc: 45,
                        tipoTasa: "kjkjhk",
                        tasaEfectiva: "5465",
                        tasaNominal: 654,
                        tasaDiferencial: 456.23,
                        cuotaTotal: "550.99",
                        comisionMin: "0.99",
                        cuotaInicial: '0.09',
                        cuotaSeguros: 150.99,
                        comisionTasaMax: '599.99',
                        cuotaQuincenal: '20.50'
                    },
                    aceptacion: {
                        fechaO: new Date(),
                        Referencia: 'XXXXXXXXXXXXXXX'
                    },
                    aceptacionjd: {
                        diaDesc: '18',
                        mesDesc: '08',
                        anioDesc: '1975'
                    }
                }
            },
            cuentas: [{
                valCodigoProducto: 'HCL',
                valCodigoSubProducto: 'HCL002',
                valNumeroProducto: '0000012345',
                valAliasProducto: 'PORN-HUB'
            }]
        }
    }
};

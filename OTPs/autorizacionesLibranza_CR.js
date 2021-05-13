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

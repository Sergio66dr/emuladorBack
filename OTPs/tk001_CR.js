module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE300',
        CVI001: 'CRE006',
        CRE300: 'CRE007',
        AUT001: 'CRE300',
        CRE300: 'CRE008',
        CRE008: 'CRE009',
        CRE010: 'CRE011',
        CRE009: 'CRE125',
        CRE125: 'CRE010',
    },
    AUT001: {
        status: 1,
        payload: {
            esCliente: false,
            esFatca: true,
            codigoVendedor: '',
            SV: {
                DECLARACION_JURADA: {
                    codOrigenPrincipal: '1'
                }
            },
            PA: {},
            CR: {},
            HN: {},
            sv: {},
            hn: {},
            cr: {},
            pa: {}
        }
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'ML',
            canal: '1',
            idModulo: 'cam',
            lenguaje: 'ES',
            pais: 'CR',
            zona: true
        }
    },
    CRE300: {
        status: 1,
        payload: {
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            comisionDesembolso: '15.258',
            montoSolicitado: '158.000',
            plazo: '36',
            tasaInteres: '12.66',
            noSolicitud: '12345678',
            detallesCuota: {
                cuotaTotal: '125.1254',
                seguroDesempleo: '153.125',
                capitalInteres: '120.125',
                seguroVida: '120.125',
                daviviendaAsistencia: '25.890',
                cuotaCredito: '15.000',
                seguroDeudor: '13.000'
            },
            EstadoSolicitud: {
                codEscenario: 'COND',
                encabezado: 'cabeza',
                listaEtapas :{
                    valOrden: 1,
                    valCodigo: 'cod123',
                    valNombreEtapa : 'nombreabc',
                    flagStatus: 0
                }
            }
         }
    },
    CRE300: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            comisionDesembolso: '15.258',
            montoSolicitado: '158.000',
            plazo: '36',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            },
            detallesCuota: {
                cuotaTotal: '125.1254',
                seguroDesempleo: '153.125',
                capitalInteres: '120.125',
                seguroVida: '120.125',
                daviviendaAsistencia: '25.890'
            }
         }
    },
    CRE008: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            comisionDesembolso: '15.258',
            montoSolicitado: '158.000',
            plazo: '36',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            },
            detallesCuota: {
                cuotaTotal: '125.1254',
                seguroDesempleo: '153.125',
                capitalInteres: '120.125',
                seguroVida: '120.125',
                daviviendaAsistencia: '25.890'
            }
         }
    },
    CRE009: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            comisionDesembolso: '15.258',
            montoSolicitado: '158.000',
            plazo: '36',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            },
            detallesCuota: {
                cuotaTotal: '125.1254',
                seguroDesempleo: '153.125',
                capitalInteres: '120.125',
                seguroVida: '120.125',
                daviviendaAsistencia: '25.890'
            }
         }
    },
    CRE125:    {
        status: 1,
        payload: {
            montoAprobado: '1510',
            montoSolicitado: '1500',
            cuota: 150,
            detallesCuota: {
                capitalInteres: 1,
                seguroDesempleo: 2,
                seguroVida: 3,
                daviviendaAsistencia: 4,
                cuotaTotal: 10
            },
            plazo: 24,
            tasaInteres: 0.11,
            comisionDesembolso: '13',
            esCliente: true,
            tieneProducto: true
         }
    },
    CRE010: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            aceptoSeguro: true,
            seguros: [{
                tipo: '',
                estatus: true
            }]
         }
    },
    CVI001: {
        status: 1,
        payload: {
            crypto: {
                metodo: "encriptacionClaveA",
                credencial : `-----BEGIN PUBLIC KEY-----
                MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi0/ajmKQ6P3+lInTZvRp
                l8NBxUikVzz1ZaqJVlW6cy6rXkms2TYwawHJp6Uat4VoMj7+jCFxs7daOcQOLWA2
                6KMKP+C8uSzdy6tgKN/CwkalDPU/+kC/ImEHwa7i3FFnXsBeJN5Md7my0MOhqYR6
                vpiGtFu99YvRzBkOsj53ZT7Fya/EgEFrAmudfnNg7BmALO0lgXUKwGBZbg5h4pSk
                ss06SQdNwvrpC0dRBBnww0nOXQmnEljNIfcJ1kCXyYO3GKVNkyzW+gQCpkB+xPxM
                4+m4WWo93xKbI9SOXaIxhDu19Y5V7cbm2BunVaIvTNAtQuoamUN3arfg3d9mO8/y
                BQIDAQAB
          -----END PUBLIC KEY-----`
            }
        }
    },
};

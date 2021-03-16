module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        ACTPN000: 'ACTPN040',
        ACTPN050: 'ACTPN060',
        ACTPN060: 'ACTPN050'
    },
    ACTPN020: {
        status: 1,
        payload: {
                "modulo": "ACTPN",
                "lenguaje": "ES",
                "canal":"37",
                "pais": "CO",
                "aliado": null
        }
    },
    ACTPN030: {
        status: 1,
        payload: {
            "canal":"37",
                "modulo": "ACTPN",
                "lenguaje": "ES",
                "pais": "CO",
                "aliado": null,
                "origenFondos": 'sss',
                actividadLaboral: "A"
        }
    },
    ACTPN040: {
        status: 1,
        payload: {
            "otp": 'mi super OTP',
            "canal":"37",
            "modulo": "ACTPN",
            "lenguaje": "ES",
            "pais": "CO",
            "aliado": null,
            "documento": {
                "numero": "10005068",
                "tipo": "01"
            },
            "email": "armancarr@gmail.com",
            "ip": "181.60.42.186, 165.225.222.250",
            "nombre": {
                "primerApellido": "BANOL",
                "primerNombre": "OSCAR",
                "segundoApellido": "LONDONO",
                "segundoNombre": "LEONARDO"
            },
            "presentacionCliente": {
                "consumer": {
                    "appConsumer": {
                        "canalId": "37",
                        "id": "ACTPN",
                        "sessionId": "e7a7d8d0-827a-11eb-ad47-87594cbd9eac",
                        "terminalId": "1",
                        "transactionId": "t123456"
                    },
                    "deviceConsumer": {
                        "id": "device-11111122222",
                        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36",
                        "locale": "CO",
                        "sessionTimeout": "600000",
                        "inactiveInterval": "600000"
                    }
                },
                "kind": {
                    "id": "ACTPN"
                },
                "module": {
                    "country": "CO",
                    "id": "ACTPN",
                    "language": "ES"
                },
                "partner": {
                    "id": "LM"
                }
            },
            "sessionIdWf": "e7a7d8d0-827a-11eb-ad47-87594cbd9eac",
            "tipoOperacionLog": "ATENCION_EN_LINEA"
        }
    },
    ACTPN050: {
        status: 1,
        payload: {
            "canal":"37",
                "modulo": "ACTPN",
                "lenguaje": "ES",
                "pais": "CO",
                "aliado": null
        }
    },
    ACTPN060: {
        status: 1,
        payload: {
            "canal":"37",
                "modulo": "ACTPN",
                "lenguaje": "ES",
                "pais": "CO",
                "aliado": null
        }
    },
    ACTPN110: {
        status: 1,
        payload: {
            "canal":"37",
                "modulo": "ACTPN",
                "lenguaje": "ES",
                "pais": "CO",
                "aliado": null,
                "datosCliente": {
                    celular: '+573213952852',
                    correoElectronico: 'cosa@ejemplo.com',
                    direccion: 'Calle 151 #13A -50',
                    ciudad: '1691812',
                    actividadLaboral: 'E',
                    nombreEmpresa: 'DXC',
                    cargo: 'desarrollador',
                    direccionEmpresa: 'Calle 151 #13A -50',
                    ciudadEmpresa: '1691812',
                    telefonoEmpresa: {
                        indicativo: '1',
                        numero: '31298811',
                        extension: '123'
                    },
                    ingresos: '123',
                    esResidenciaFiscalExt: false,
                    codPaisResidenciaExt: '168',
                    numIdFiscal: '',
                    esFatca: true,
                    nombreDeclaracionFatca: '11111111111 22222222222 333333333333 555555555555',
                    clasificacionFatca: '',
                    direccionFatca: '',
                    ciudadFatca: '',
                    codigoPostalFatca: '',
                    numeroTIN: ''
                }
        }
    }
};

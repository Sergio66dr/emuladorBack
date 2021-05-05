module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: 'BIO001',
        ING001: 'BIO001',
        BIO001: 'BIO002',
        BIO002: 'BIO003',
        BIO003: 'BIO004',
        BIO004: 'BIO005',
        BIO005: 'BIO001'
    },
    BIO005:{
        status: 1,
        payload: {
            codigo:'',
            descripcion:'',
            preguntas:[
                {
                    orden:1,
                    tipoPregunta:'',
                    pregunta:{
                        idPregunta:'',
                        textoPregunta:'',
                        respuestas:[
                            {
                                textoRespuesta:'',
                                idRespuesta:'',
                                coordenadaRespuesta:''
                            }
                        ]
                    }
                }
               

            ]
        }
            
    },
    ING001: {
        status: 1,
        payload: {
            "aliado":"LM",
            "canal":"1",
            "idModulo":"MNUING",
            "lenguaje":"ES",
            "pais":"HN",
            "zona": true
        }
    },
    BIO001: {
        status: 1,
        payload: {
            catalogo: {
                canal: '1',
                lenguaje: 'ES',
                modulo: 'CTACAM',
                pais: 'HN',
                aliado: 'N/A'
            }
        }
    },
    BIO002: {
        status: 1,
        payload: {
            catalogo: {
                canal: '1',
                lenguaje: 'ES',
                modulo: 'CTACAM',
                pais: 'HN',
                aliado: 'N/A'
            }
        }
    },
    BIO003: {
        status: 1,
        payload: {
            catalogo: {
                canal: '1',
                lenguaje: 'ES',
                modulo: 'CTACAM',
                pais: 'HN',
                aliado: 'N/A'
            }
        }
    },
    BIO004: {
        status: 1,
        payload: {
            catalogo: {
                canal: '1',
                lenguaje: 'ES',
                modulo: 'CTACAM',
                pais: 'HN',
                aliado: 'N/A'
            }
        }
    },
    BIO005: {
        status: 1,
        payload: {
            catalogo: {
                canal: '1',
                lenguaje: 'ES',
                modulo: 'CTACAM',
                pais: 'HN',
                aliado: 'N/A'
            }
        }
    },
    VIN006: {
        status: 1,
        payload: {}
    }
};

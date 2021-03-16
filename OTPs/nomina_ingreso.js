module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
    // TOKEN DE PRESENTACION CLIENTE

    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: "ING001",
        CUE: "CUE001",
        TMA000: "TMA004",
        TMA001: 'CUE030',
        BIO002: 'BIO005',
        BIO005: 'BIO003',
        CUE070: "ING001"
    },
    CUE001: {
        status: 1,
        payload: {
            "nombre": 
                {
                    "primerNombre":"Juan Pablo",
                    "primerApellido":"Cervantes",
                },
            "fechaNacimiento":"2000/01/01",
            "aliado":"LM",
            "canal":"37",
            "modulo":"MNUING",
            "lenguaje":"ES",
            "pais":"CO"
        }
    },
    TMA005: {
        status: 1,
        payload: {
            idAliado: 'MC',
            callbackUrl: "http://ok",
            esCliente: false,
            fechaHora: "06/11/2020 02:51:26 pm",
            fechaVencimiento: "07/2026",
            montoAprobado: "2000000",
            nombre: "ANDRES",
            numeroTarjetaCredito: "21615646564654"
        }
    },
    TMA004: {
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
    CUE030: {
        status: 1,
        payload: {}
    },
    BIO003: {
        status: 1,
        payload: {}
    },
    BIO005: {
        status: 1,
        payload: {
            crypto: {
                metodo: "encriptacionClaveA",
                credencial: `-----BEGIN PUBLIC KEY-----
                MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5EM+PpFGljhLw4ZvcoxS
                kyLaVkJVN03Pk3aw99tc6jsgmUmM4aYkxeTDHPcpd7FwzIiwRmHPaYxA54r0hYVq
                wQ5KfNlJm3J1SY6B0EyWnEsvLwk382wvFlZW0DWmE6K2aBa1ypZUqXUwGmyAFu1q
                jg5AWb4qigziwy1/ukYPfNsFEfbldSAB3m3qZJC08YbcDfmfmOc1ylV6UWVWdUh7
                uGjPMipL9VI6MuIK5cqXliMKjUsIqoP585JrwnqkWe0f9GcShGBtONpyAK6/2scD
                t9sugaS2TDgu9JWe+Clh9yPXPoRuHnti0/kctpzCtQRR59UIqDG0jyajxQDyx8wb
                7K2aCvFv+d1BqNJ+JkHA7oSW0Ulvd3/sou7VjKK1d+o0RaU+6JDtda444ZNBx0lo
                Q+C+ZnMd0R9uoxGREeyprxnJRPph1GVfGSkr8QHIxTLmYUhacMgnORbccEGkhMyQ
                UQOsSzBaI63NbcqX28oExyRlpZDsMiDR59ikvaX1supUOBZRR1614GTsWvV2xIW+
                y+/an/Gzq3yGSOI2dzPrqrS4Qr086HZEs7NgmZQPbKsckNwmidLAJZue2ovNmCAa
                3OyhDEtCyiQxEb2Z7kL9kJqKmdqtKQVCHqjM2PqzWX3PJ9VQX+GS9riqOwJqkUQZ
                ii/NcrfiE71w0hiOMkBAzukCAwEAAQ==
                -----END PUBLIC KEY-----
                `
            },
            reintento: '',
            esCliente: ''
        }
    },
    VIN002: {
        status: 1,
        payload: {}
    },
    VIN003: {
        status: 1,
        payload: {}
    }
};

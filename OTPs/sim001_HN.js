module.exports = {
    // TOKEN DEL EMU
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    //token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuY2FtLmRhdml2aWVuZGEuY29tL2F1dGgvdjEva2V5c3RvcmUvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiMTU5MDk5OTA0NiJ9.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTYwMDQ5ODg3NywiaWF0IjoxNjAwNDk3MDc3LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6ImI5MjQ2NWQwLWZhNDEtMTFlYS1iMTEzLWVmMTU2M2Q2NGNmZCIsInVzZSI6Im8iLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzEiLCJqdGkiOiJiOTU2OTk2MC1mYTQxLTExZWEtYjFkYy1lYjk1MTk2MmQzZTYifQ.ianYIupen8VK8Pjahgn79R7JV9FB05fwhvWovGaCH4zspo1toVZ2PaeMN_tlhf1aZxtkTcZCMpKGe697ew43NmSSFTBpaXZTJfmzkZ-r9QyY3tADH3KFyplrxZBzolYO_jiby72SN83p1CeI4uPjRQVrgupJnzMj9kRyeyp1Twn5GzLk1A7Xh6MFWDr1bvil036-f1yIiAJTyuAR9DLiynVlZTsAm4ooZssuS81-_m--jRnxeJiXWXC4QjWeXNsNN5sbAsVZpEAc2ncgRMbNytnvc-x4AE9uOONmGqaPDQnc_HGcmqYstG98czrycEHAHL2obNV1oreN4T3zUj20yg',
    
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE001',
        CRE001: 'ING001'
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'ML',
            canal: '2',
            idModulo: 'cam',
            lenguaje: 'ES',
            pais: 'HN',
            zona: true,
            productosBeta: []
        }
    },
    CRE001: {
        status: 1,
        payload: {
            esCliente: true,
            esCreditoPreaprobado: true,
            creditoPreaprobado: {
                plazo: {
                    "minPlazo": '100',
                    "maxPlazo": '100',
                    "intervalo": '500'
                },
                rango: {
                    "minValorDeseado": '1000.00',
                    "intervalo": '91',
                    "maxValorDeseado": '2000.00'
                }
            }
        }
    },
    SIM002: {
        status: 1,
        payload: {
            valor: 50000,
            meses: 12,
            cuotaMensual: 450
        }
    }
};

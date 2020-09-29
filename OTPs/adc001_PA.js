module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuY2FtLmRhdml2aWVuZGEuY29tL2F1dGgvdjEva2V5c3RvcmUvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiMTU5MDk5OTA0NiJ9.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTYwMDQ5ODg3NywiaWF0IjoxNjAwNDk3MDc3LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6ImI5MjQ2NWQwLWZhNDEtMTFlYS1iMTEzLWVmMTU2M2Q2NGNmZCIsInVzZSI6Im8iLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzEiLCJqdGkiOiJiOTU2OTk2MC1mYTQxLTExZWEtYjFkYy1lYjk1MTk2MmQzZTYifQ.ianYIupen8VK8Pjahgn79R7JV9FB05fwhvWovGaCH4zspo1toVZ2PaeMN_tlhf1aZxtkTcZCMpKGe697ew43NmSSFTBpaXZTJfmzkZ-r9QyY3tADH3KFyplrxZBzolYO_jiby72SN83p1CeI4uPjRQVrgupJnzMj9kRyeyp1Twn5GzLk1A7Xh6MFWDr1bvil036-f1yIiAJTyuAR9DLiynVlZTsAm4ooZssuS81-_m--jRnxeJiXWXC4QjWeXNsNN5sbAsVZpEAc2ncgRMbNytnvc-x4AE9uOONmGqaPDQnc_HGcmqYstG98czrycEHAHL2obNV1oreN4T3zUj20yg',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE006',
        CRE006: 'CRE007',
        CRE007: 'CRE008',
        CRE008: 'CRE009',
        CRE009: 'CRE010',
        CRE010: 'CRE011',
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'ML',
            canal: '2',
            idModulo: 'cam',
            lenguaje: 'ES',
            pais: 'PA',
            zona: true
        }
    },
    CRE006: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            }
         }
    },
    CRE007: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
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
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
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
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            }
         }
    },
    CRE010: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true
         }
    }
};

module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE2MDAzOTMzNjcifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTYwMDUwMDkyNCwiaWF0IjoxNjAwNDk5MTI0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjdjZWZiMzgwLWZhNDYtMTFlYS04NWQ5LWUxZGE1YTA2ZjhhZCIsInVzZSI6Im8iLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzIiLCJqdGkiOiI3ZDBlODYyMC1mYTQ2LTExZWEtOGVhZC0yNTNhMmNiMTRkZDQifQ.KTtmu6up3736cqQnxgFZBIHeMMeKTgpfqlRnyAl5USUPAE5y25BAI5Af6Dp5l7UlyN7ZCtO-9aNz2dhq2A50JsmjNA-P30r3Yg8x0wgph7Tjwk_3hVAYVue6XBkKyzD0tQdrxhALJnKe7IWjVS5LIZN8KkPSJByXY6ONRo-GpjqB3NrkjNiCxHmu0Y3xeCnEQYsFdiEBqer15-5xkQ1v45C51XFGD5cE4XpO_AXngULmDhTLTOPgvBaIYhMn9N4UP8rmiYAlwzpzDieDG-5WhHk00Z_o_WStrwg19V8OdFHorKAKe_TrP_30gJmo_5Bup4vSgV1d-H7KFXcL7Mj8mA',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE001',
        CRE001: 'ING001'
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'ML',
            canal: '1',
            idModulo: 'cam',
            lenguaje: 'ES',
            pais: 'CR',
            zona: true,
            productosBeta: ['CRECAM']
        }
    },
    CRE001: {
        status: 1,
        payload: {
            esCliente: true
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

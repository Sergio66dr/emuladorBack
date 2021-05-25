const fs = require('fs');

module.exports = {
  // TOKEN DEL EMU
  // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

  // TOKEN DE PRESENTACION CLIENTE
  token:
    "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w",
  workflow: {
    APPBOOT: "TRACK010",
  },
  TRACK010: {
    status: 1,
    payload: {
      catalogo: {
        pais: "CR",
        canal: "1",
        lenguaje: "ES",
        modulo: "TRACKCAM",
        aliado: "N/A",
      },
      montoAprobado: '1499.99',
      montoSolicitado: "1500",
      fechaSolicitud: new Date(),
      comisionDesembolso: '0.55',
      plazo: 36,
      cuota: 150,
      detallesCuota: {
        cuotaTotal: 10,
        seguroDesempleo: 2,
        capitalInteres: '0.25',
        seguroVida: '150.09',
        daviviendaAsistencia: '200',
        // cuotaCredito: 7,
        // seguroDeudor: 9,
      },
      tasaInteres: 11,
      noSolicitud: '123456789',
      estadoSolicitud: {
        codEscenario: '0',
        encabezado: 'Encabezado bien chido',
        listaEtapas: [{
          valOrden: '0',
          valCodigo: 'GOOD',
          valNombreEtapa: 'Frima electrónica de documentos',
          flagStatus: 0
        }, {
          valOrden: '1',
          valCodigo: 'STOP',
          valNombreEtapa: 'En análisis de Crédito',
          flagStatus: 0
        }, {
          valOrden: '1',
          valCodigo: 'STOP',
          valNombreEtapa: 'Credito aprobado',
          flagStatus: 0
        }, {
          valOrden: '1',
          valCodigo: 'STOP',
          valNombreEtapa: 'Firma física de documentos',
          flagStatus: 1
        }, {
          valOrden: '1',
          valCodigo: 'STOP',
          valNombreEtapa: 'Credito desembolsado',
          flagStatus: 1
        }]
      }
    },
  },
};

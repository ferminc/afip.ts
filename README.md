MODULO AFIP.TS (https://github.com/ralcorta/afip.ts) CON METODO CAEA

Instalación 

IMPORTANTE: para poder realizar la instalación es necesario tener previamente instalados los módulos

-rimraf

-typescript

-copyfiles

ya que son usados para correr el build script, luego se pueden eliminar.

npm install https://github.com/ferminc/afip.ts

o

yarn add https://github.com/ferminc/afip.ts

FUNCTIONS 

```

afip.electronicBillingService.createCAEARequest({ Periodo: 202504, Orden: 2 }).then((res) => {

  console.log(res); // ex { CAEA: 35163441069511, FchVigDesde: '20250416', FchVigHasta: '20250430', ... }

  // If CAEA already requested it will return error in res.response.Errors

});

afip.electronicBillingService.consultCAEA({ Periodo: 202504, Orden: 2 }).then((res) => {

  console.log(res.CAEA); // ex 35163441069511

});

// Parameter is the same object as the createInvoice method + CAEA + CbteFchHsGen (YYYYMMDDhhmmss)

afip.electronicBillingService.registerCAEAInvoice({ ...voucherInfo, CAEA, CbteFchHsGen}).then((res) => {

  console.log(res.FeCabResp.Resultado); // Resultado: A | R | P 

});

afip.electronicBillingService.informUnusedCAEA({ CAEA: '35163441069511', PtoVta: 1 }).then((res) => {

  console.log(res.result); // Resultado: A | R 

});

```
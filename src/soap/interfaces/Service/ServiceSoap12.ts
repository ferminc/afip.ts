/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from "soap";
import { SoapAsyncFunc } from "../../../types";

/* tslint:disable:max-line-length no-empty-interface */

export interface IFECAESolicitarInput {
  // Auth: ServiceSoap12Types.IAuth;
  FeCAEReq: ServiceSoap12Types.IFeCAEReq;
}

export interface IFECAESolicitarOutput {
  FECAESolicitarResult: ServiceSoap12Types.IFECAESolicitarResult;
}

export interface IFECompTotXRequestInput {
 // Auth: ServiceSoap12Types.IAuth;
}

export interface IFECompTotXRequestOutput {
  FECompTotXRequestResult: ServiceSoap12Types.IFECompTotXRequestResult;
}

export interface IFEDummyInput {}

export interface IFEDummyOutput {
  FEDummyResult: ServiceSoap12Types.IFEDummyResult;
}

export interface IFECompUltimoAutorizadoInput {
  // Auth: ServiceSoap12Types.IAuth;
  /** s:int(undefined) */
  PtoVta: number; // int;
  /** s:int(undefined) */
  CbteTipo: number; // int;
}

export interface IFECompUltimoAutorizadoOutput {
  FECompUltimoAutorizadoResult: ServiceSoap12Types.IFECompUltimoAutorizadoResult;
}

export interface IFECompConsultarInput {
  // Auth: ServiceSoap12Types.IAuth;
  FeCompConsReq: ServiceSoap12Types.IFeCompConsReq;
}

export interface IFECompConsultarOutput {
  FECompConsultarResult: ServiceSoap12Types.IFECompConsultarResult;
}

export interface IFECAEARegInformativoInput {
 // Auth: ServiceSoap12Types.IAuth;
  FeCAEARegInfReq: ServiceSoap12Types.IFeCAEARegInfReq;
}

export interface IFECAEARegInformativoOutput {
  FECAEARegInformativoResult: ServiceSoap12Types.IFECAEARegInformativoResult;
}

export interface IFECAEASolicitarInput {
 // Auth: ServiceSoap12Types.IAuth;
  /** s:int(undefined) */
  Periodo: number; // int;
  /** s:short(undefined) */
  Orden: number;
}

export interface IFECAEASolicitarOutput {
  FECAEASolicitarResult: ServiceSoap12Types.IFECAEASolicitarResult;
}

export interface IFECAEASinMovimientoConsultarInput {
 // Auth: ServiceSoap12Types.IAuth;
  /** s:string(undefined) */
  CAEA: string;
  /** s:int(undefined) */
  PtoVta: number; // int;
}

export interface IFECAEASinMovimientoConsultarOutput {
  FECAEASinMovimientoConsultarResult: ServiceSoap12Types.IFECAEASinMovimientoConsultarResult;
}

export interface IFECAEASinMovimientoInformarInput {
 // Auth: ServiceSoap12Types.IAuth;
  /** s:int(undefined) */
  PtoVta: number; // int;
  /** s:string(undefined) */
  CAEA: string;
}

export interface IFECAEASinMovimientoInformarOutput {
  FECAEASinMovimientoInformarResult: ServiceSoap12Types.IFECAEASinMovimientoInformarResult;
}

export interface IFECAEAConsultarInput {
 // Auth: ServiceSoap12Types.IAuth;
  /** s:int(undefined) */
  Periodo: number; // int;
  /** s:short(undefined) */
  Orden: number;
}

export interface IFECAEAConsultarOutput {
  FECAEAConsultarResult: ServiceSoap12Types.IFECAEAConsultarResult;
}

export interface IFEParamGetCotizacionInput {
 // Auth: ServiceSoap12Types.IAuth;
  /** s:string(undefined) */
  MonId: string;
  /** s:string(undefined) */
  FchCotiz: string;
}

export interface IFEParamGetCotizacionOutput {
  FEParamGetCotizacionResult: ServiceSoap12Types.IFEParamGetCotizacionResult;
}

export interface IFEParamGetTiposTributosInput {
  // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposTributosOutput {
  FEParamGetTiposTributosResult: ServiceSoap12Types.IFEParamGetTiposTributosResult;
}

export interface IFEParamGetTiposMonedasInput {
  // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposMonedasOutput {
  FEParamGetTiposMonedasResult: ServiceSoap12Types.IFEParamGetTiposMonedasResult;
}

export interface IFEParamGetTiposIvaInput {
  // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposIvaOutput {
  FEParamGetTiposIvaResult: ServiceSoap12Types.IFEParamGetTiposIvaResult;
}

export interface IFEParamGetTiposOpcionalInput {
  // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposOpcionalOutput {
  FEParamGetTiposOpcionalResult: ServiceSoap12Types.IFEParamGetTiposOpcionalResult;
}

export interface IFEParamGetTiposConceptoInput {
 // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposConceptoOutput {
  FEParamGetTiposConceptoResult: ServiceSoap12Types.IFEParamGetTiposConceptoResult;
}

export interface IFEParamGetPtosVentaInput {
 // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetPtosVentaOutput {
  FEParamGetPtosVentaResult: ServiceSoap12Types.IFEParamGetPtosVentaResult;
}

export interface IFEParamGetTiposCbteInput {
  // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposCbteOutput {
  FEParamGetTiposCbteResult: ServiceSoap12Types.IFEParamGetTiposCbteResult;
}

export interface IFEParamGetCondicionIvaReceptorInput {
 // Auth: ServiceSoap12Types.IAuth;
  /** s:string(undefined) */
  ClaseCmp: string;
}

export interface IFEParamGetCondicionIvaReceptorOutput {
  FEParamGetCondicionIvaReceptorResult: ServiceSoap12Types.IFEParamGetCondicionIvaReceptorResult;
}

export interface IFEParamGetTiposDocInput {
 // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposDocOutput {
  FEParamGetTiposDocResult: ServiceSoap12Types.IFEParamGetTiposDocResult;
}

export interface IFEParamGetTiposPaisesInput {
 // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetTiposPaisesOutput {
  FEParamGetTiposPaisesResult: ServiceSoap12Types.IFEParamGetTiposPaisesResult;
}

export interface IFEParamGetActividadesInput {
 // Auth: ServiceSoap12Types.IAuth;
}

export interface IFEParamGetActividadesOutput {
  FEParamGetActividadesResult: ServiceSoap12Types.IFEParamGetActividadesResult;
}

export interface IServiceSoap12Soap extends Client {
  FECAESolicitar: (
    input: IFECAESolicitarInput,
    cb: (
      err: any | null,
      result: IFECAESolicitarOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECAESolicitarAsync: SoapAsyncFunc<
    IFECAESolicitarInput,
    IFECAESolicitarOutput
  >;
  FECompTotXRequest: (
    input: IFECompTotXRequestInput,
    cb: (
      err: any | null,
      result: IFECompTotXRequestOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECompTotXRequestAsync: SoapAsyncFunc<
    IFECompTotXRequestInput,
    IFECompTotXRequestOutput
  >;
  FEDummy: (
    input: IFEDummyInput,
    cb: (
      err: any | null,
      result: IFEDummyOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEDummyAsync: (
    input: IFEDummyInput,
    options?: any,
    extraHeaders?: any
  ) => Promise<[IFEDummyOutput, string, { [k: string]: any }, string]>;
  FECompUltimoAutorizado: (
    input: IFECompUltimoAutorizadoInput,
    cb: (
      err: any | null,
      result: IFECompUltimoAutorizadoOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECompUltimoAutorizadoAsync: (
      input: IFECompUltimoAutorizadoInput,
      options?: any,
      extraHeaders?: any
    ) => Promise<
      [IFECompUltimoAutorizadoOutput, string, { [k: string]: any }, string]
    >;
  FECompConsultar: (
    input: IFECompConsultarInput,
    cb: (
      err: any | null,
      result: IFECompConsultarOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECompConsultarAsync: (
      input: IFECompConsultarInput,
      options?: any,
      extraHeaders?: any
    ) => Promise<[IFECompConsultarOutput, string, { [k: string]: any }, string]>;
  FECAEARegInformativo: (
    input: IFECAEARegInformativoInput,
    cb: (
      err: any | null,
      result: IFECAEARegInformativoOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECAEARegInformativoAsync: SoapAsyncFunc<
  IFECAEARegInformativoInput,
  IFECAEARegInformativoOutput
>;
  FECAEASolicitar: (
    input: IFECAEASolicitarInput,
    cb: (
      err: any | null,
      result: IFECAEASolicitarOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECAEASolicitarAsync: (
      input: IFECAEASolicitarInput,
      options?: any,
      extraHeaders?: any
    ) => Promise<[IFECAEASolicitarOutput, string, { [k: string]: any }, string]>;
  FECAEASinMovimientoConsultar: (
    input: IFECAEASinMovimientoConsultarInput,
    cb: (
      err: any | null,
      result: IFECAEASinMovimientoConsultarOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECAEASinMovimientoConsultarAsync: SoapAsyncFunc<
    IFECAEASinMovimientoConsultarInput,
    IFECAEASinMovimientoConsultarOutput
  >;
  FECAEASinMovimientoInformar: (
    input: IFECAEASinMovimientoInformarInput,
    cb: (
      err: any | null,
      result: IFECAEASinMovimientoInformarOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECAEASinMovimientoInformarAsync: SoapAsyncFunc<
    IFECAEASinMovimientoInformarInput,
    IFECAEASinMovimientoInformarOutput
  >;
  FECAEAConsultar: (
    input: IFECAEAConsultarInput,
    cb: (
      err: any | null,
      result: IFECAEAConsultarOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FECAEAConsultarAsync: SoapAsyncFunc<
    IFECAEAConsultarInput,
    IFECAEAConsultarInput
  >;
  FEParamGetCotizacion: (
    input: IFEParamGetCotizacionInput,
    cb: (
      err: any | null,
      result: IFEParamGetCotizacionOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetCotizacionAsync: (
      input: IFEParamGetCotizacionInput,
      options?: any,
      extraHeaders?: any
    ) => Promise<
      [IFEParamGetCotizacionOutput, string, { [k: string]: any }, string]
    >;
  FEParamGetTiposTributos: (
    input: IFEParamGetTiposTributosInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposTributosOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposTributosAsync: SoapAsyncFunc<
    IFEParamGetTiposTributosInput,
    IFEParamGetTiposTributosOutput
  >;
  FEParamGetTiposMonedas: (
    input: IFEParamGetTiposMonedasInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposMonedasOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposMonedasAsync: SoapAsyncFunc<
    IFEParamGetTiposMonedasInput,
    IFEParamGetTiposMonedasOutput
  >;
  FEParamGetTiposIva: (
    input: IFEParamGetTiposIvaInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposIvaOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposIvaAsync: SoapAsyncFunc<
    IFEParamGetTiposIvaInput,
    IFEParamGetTiposIvaOutput
  >;
  FEParamGetTiposOpcional: (
    input: IFEParamGetTiposOpcionalInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposOpcionalOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposOpcionalAsync: SoapAsyncFunc<
    IFEParamGetTiposOpcionalInput,
    IFEParamGetTiposOpcionalOutput
  >;
  FEParamGetTiposConcepto: (
    input: IFEParamGetTiposConceptoInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposConceptoOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposConceptoAsync: SoapAsyncFunc<
    IFEParamGetTiposConceptoInput,
    IFEParamGetTiposConceptoOutput
  >;
  FEParamGetPtosVenta: (
    input: IFEParamGetPtosVentaInput,
    cb: (
      err: any | null,
      result: IFEParamGetPtosVentaOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetPtosVentaAsync: (
      input: IFEParamGetPtosVentaInput,
      options?: any,
      extraHeaders?: any
    ) => Promise<
      [IFEParamGetPtosVentaOutput, string, { [k: string]: any }, string]
    >;
  FEParamGetTiposCbte: (
    input: IFEParamGetTiposCbteInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposCbteOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposCbteAsync: (
    input: IFEParamGetTiposCbteInput,
    options?: any,
    extraHeaders?: any
  ) => [IFEParamGetTiposCbteOutput, string, { [k: string]: any }, string]; 
  FEParamGetCondicionIvaReceptor: (
    input: IFEParamGetCondicionIvaReceptorInput,
    cb: (
      err: any | null,
      result: IFEParamGetCondicionIvaReceptorOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetCondicionIvaReceptorAsync: SoapAsyncFunc<
  IFEParamGetCondicionIvaReceptorInput,
  IFEParamGetCondicionIvaReceptorOutput
>;
  FEParamGetTiposDoc: (
    input: IFEParamGetTiposDocInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposDocOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposDocAsync: SoapAsyncFunc<
    IFEParamGetTiposDocInput,
    IFEParamGetTiposDocOutput
  >;
  FEParamGetTiposPaises: (
    input: IFEParamGetTiposPaisesInput,
    cb: (
      err: any | null,
      result: IFEParamGetTiposPaisesOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetTiposPaisesAsync: SoapAsyncFunc<
    IFEParamGetTiposPaisesInput,
    IFEParamGetTiposPaisesOutput
  >;
  FEParamGetActividades: (
    input: IFEParamGetActividadesInput,
    cb: (
      err: any | null,
      result: IFEParamGetActividadesOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  FEParamGetActividadesAsync: SoapAsyncFunc<
  IFEParamGetActividadesInput,
  IFEParamGetActividadesOutput
  >;
}

export namespace ServiceSoap12Types {
  export interface IAuth {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Token: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Sign: string;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    Cuit: number;
  }
  export interface IFeCabReq {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CantReg: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    PtoVta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CbteTipo: number;
  }
  export interface ICbteAsoc {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Tipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    PtoVta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    Nro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Cuit: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CbteFch?: string;
  }
  export interface ICbtesAsoc {
    CbteAsoc: ServiceSoap12Types.ICbteAsoc[];
  }
  export interface ITributo {
    /** http://ar.gov.afip.dif.FEV1/#s:short(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    BaseImp: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    Alic: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    Importe: number;
  }
  export interface ITributos {
    Tributo: ServiceSoap12Types.ITributo[];
  }
  export interface IAlicIva {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    BaseImp: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    Importe: number;
  }
  export interface IIva {
    AlicIva: ServiceSoap12Types.IAlicIva[];
  }
  export interface IOpcional {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Id: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Valor: string;
  }
  export interface IOpcionales {
    Opcional: ServiceSoap12Types.IOpcional[];
  }
  export interface IComprador {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    DocTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    DocNro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    Porcentaje: number;
  }
  export interface ICompradores {
    Comprador: ServiceSoap12Types.IComprador[];
  }
  export interface IPeriodoAsoc {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IActividad {
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    Id: number;
  }
  export interface IActividades {
    Actividad: ServiceSoap12Types.IActividad[];
  }
  export interface IFECAEDetRequest {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Concepto: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    DocTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    DocNro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteDesde: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteHasta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CbteFch: string;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpTotal: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpTotConc: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpNeto: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpOpEx: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpTrib: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpIVA: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchServDesde?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchServHasta?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchVtoPago?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    MonId: string;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    MonCotiz: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CanMisMonExt?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CondicionIVAReceptorId: number;
    CbtesAsoc?: ServiceSoap12Types.ICbtesAsoc;
    Tributos?: ServiceSoap12Types.ITributos;
    Iva?: ServiceSoap12Types.IIva;
    Opcionales?: ServiceSoap12Types.IOpcionales;
    Compradores?: ServiceSoap12Types.ICompradores;
    PeriodoAsoc?: ServiceSoap12Types.IPeriodoAsoc;
    Actividades?: ServiceSoap12Types.IActividades;
  }
  export interface IFeCAEReq {
    FeCabReq: ServiceSoap12Types.IFeCabReq;
    FeDetReq: {
      FECAEDetRequest: ServiceSoap12Types.IFECAEDetRequest[];
    };
  }
  export interface IFeCabResp {
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    Cuit: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    PtoVta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CbteTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchProceso: string;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CantReg: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Resultado: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Reproceso: string;
  }
  export interface IObs {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Code: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Msg: string;
  }
  export interface IObservaciones {
    Obs: ServiceSoap12Types.IObs[];
  }
  export interface IFECAEDetResponse {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Concepto: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    DocTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    DocNro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteDesde: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteHasta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CbteFch: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Resultado: string;
    Observaciones: ServiceSoap12Types.IObservaciones;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CAE: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CAEFchVto: string;
  }
  export interface IEvt {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Code: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Msg: string;
  }
  export interface IEvents {
    Evt: ServiceSoap12Types.IEvt[];
  }
  export interface IErr {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Code: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Msg: string;
  }
  export interface IErrors {
    Err: ServiceSoap12Types.IErr[];
  }
  export interface IFECAESolicitarResult {
    FeCabResp: ServiceSoap12Types.IFeCabResp;
    FeDetResp: {
      FECAEDetResponse: ServiceSoap12Types.IFECAEDetResponse[];
    };
    Events: ServiceSoap12Types.IEvents;
    Errors: ServiceSoap12Types.IErrors;
  }
  export interface IFECompTotXRequestResult {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    RegXReq: number;
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IFEDummyResult {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    AppServer: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    DbServer: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    AuthServer: string;
  }
  export interface IFECompUltimoAutorizadoResult {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    PtoVta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CbteTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CbteNro: number;
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IFeCompConsReq {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CbteTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteNro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    PtoVta: number;
  }
  export interface IFECompConsultarResult {
    ResultGet: {
      /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
      Concepto: number;
      /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
      DocTipo: number;
      /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
      DocNro: number;
      /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
      CbteDesde: number;
      /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
      CbteHasta: number;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      CbteFch: string;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      ImpTotal: number;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      ImpTotConc: number;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      ImpNeto: number;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      ImpOpEx: number;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      ImpTrib: number;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      ImpIVA: number;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchServDesde: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchServHasta: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchVtoPago: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      MonId: string;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      MonCotiz: number;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      CanMisMonExt: string;
      /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
      CondicionIVAReceptorId: number;
      CbtesAsoc: ServiceSoap12Types.ICbtesAsoc;
      Tributos: ServiceSoap12Types.ITributos;
      Iva: ServiceSoap12Types.IIva;
      Opcionales: ServiceSoap12Types.IOpcionales;
      Compradores: ServiceSoap12Types.ICompradores;
      PeriodoAsoc: ServiceSoap12Types.IPeriodoAsoc;
      Actividades: ServiceSoap12Types.IActividades;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      Resultado: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      CodAutorizacion: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      EmisionTipo: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchVto: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchProceso: string;
      Observaciones: ServiceSoap12Types.IObservaciones;
      /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
      PtoVta: number;
      /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
      CbteTipo: number;
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IFECAEADetRequest {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Concepto: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    DocTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    DocNro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteDesde: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteHasta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CbteFch: string;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpTotal: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpTotConc: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpNeto: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpOpEx: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpTrib: number;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    ImpIVA: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchServDesde?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchServHasta?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchVtoPago?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    MonId: string;
    /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
    MonCotiz: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CanMisMonExt?: string;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    CondicionIVAReceptorId: number;
    CbtesAsoc?: ServiceSoap12Types.ICbtesAsoc;
    Tributos?: ServiceSoap12Types.ITributos;
    Iva?: ServiceSoap12Types.IIva;
    Opcionales?: ServiceSoap12Types.IOpcionales;
    Compradores?: ServiceSoap12Types.ICompradores;
    PeriodoAsoc?: ServiceSoap12Types.IPeriodoAsoc;
    Actividades?: ServiceSoap12Types.IActividades;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CAEA: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CbteFchHsGen: string;
  }
  export interface IFeCAEARegInfReq {
    FeCabReq: ServiceSoap12Types.IFeCabReq;
    FeDetReq: {
      FECAEADetRequest: ServiceSoap12Types.IFECAEADetRequest[];
    };
  }
  export interface IFECAEADetResponse {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Concepto: number;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    DocTipo: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    DocNro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteDesde: number;
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    CbteHasta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CbteFch: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Resultado: string;
    Observaciones: ServiceSoap12Types.IObservaciones;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CAEA: string;
  }
  export interface IFECAEARegInformativoResult {
    FeCabResp: ServiceSoap12Types.IFeCabResp;
    FeDetResp: {
      FECAEADetResponse: ServiceSoap12Types.IFECAEADetResponse[];
    };
    Events: ServiceSoap12Types.IEvents;
    Errors: ServiceSoap12Types.IErrors;
  }
  export interface IFECAEASolicitarResult {
    ResultGet: {
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      CAEA: string;
      /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
      Periodo: number;
      /** http://ar.gov.afip.dif.FEV1/#s:short(undefined) */
      Orden: number;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchVigDesde: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchVigHasta: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchTopeInf: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchProceso: string;
      Observaciones: ServiceSoap12Types.IObservaciones;
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IFECAEASinMov {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CAEA: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchProceso: string;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    PtoVta: number;
  }
  export interface IFECAEASinMovimientoConsultarResult {
    ResultGet: {
      FECAEASinMov: ServiceSoap12Types.IFECAEASinMov[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IFECAEASinMovimientoInformarResult {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    CAEA: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchProceso: string;
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    PtoVta: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Resultado: string;
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IFECAEAConsultarResult {
    ResultGet: {
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      CAEA: string;
      /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
      Periodo: number;
      /** http://ar.gov.afip.dif.FEV1/#s:short(undefined) */
      Orden: number;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchVigDesde: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchVigHasta: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchTopeInf: string;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchProceso: string;
      Observaciones: ServiceSoap12Types.IObservaciones;
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IFEParamGetCotizacionResult {
    ResultGet: {
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      MonId: string;
      /** http://ar.gov.afip.dif.FEV1/#s:double(undefined) */
      MonCotiz: number;
      /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
      FchCotiz: string;
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface ITributoTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:short(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IFEParamGetTiposTributosResult {
    ResultGet: {
      TributoTipo: ServiceSoap12Types.ITributoTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IMoneda {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Id: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IFEParamGetTiposMonedasResult {
    ResultGet: {
      Moneda: ServiceSoap12Types.IMoneda[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IIvaTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Id: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IFEParamGetTiposIvaResult {
    ResultGet: {
      IvaTipo: ServiceSoap12Types.IIvaTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IOpcionalTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Id: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IFEParamGetTiposOpcionalResult {
    ResultGet: {
      OpcionalTipo: ServiceSoap12Types.IOpcionalTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IConceptoTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IFEParamGetTiposConceptoResult {
    ResultGet: {
      ConceptoTipo: ServiceSoap12Types.IConceptoTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IPtoVenta {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Nro: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    EmisionTipo: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Bloqueado: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchBaja: string;
  }
  export interface IFEParamGetPtosVentaResult {
    ResultGet: {
      PtoVenta: ServiceSoap12Types.IPtoVenta[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface ICbteTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IFEParamGetTiposCbteResult {
    ResultGet: {
      CbteTipo: ServiceSoap12Types.ICbteTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface ICondicionIvaReceptor {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Cmp_Clase: string;
  }
  export interface IFEParamGetCondicionIvaReceptorResult {
    ResultGet: {
      CondicionIvaReceptor: ServiceSoap12Types.ICondicionIvaReceptor[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IDocTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:int(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchDesde: string;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    FchHasta: string;
  }
  export interface IFEParamGetTiposDocResult {
    ResultGet: {
      DocTipo: ServiceSoap12Types.IDocTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IPaisTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:short(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
  }
  export interface IFEParamGetTiposPaisesResult {
    ResultGet: {
      PaisTipo: ServiceSoap12Types.IPaisTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
  export interface IActividadesTipo {
    /** http://ar.gov.afip.dif.FEV1/#s:long(undefined) */
    Id: number;
    /** http://ar.gov.afip.dif.FEV1/#s:short(undefined) */
    Orden: number;
    /** http://ar.gov.afip.dif.FEV1/#s:string(undefined) */
    Desc: string;
  }
  export interface IFEParamGetActividadesResult {
    ResultGet: {
      ActividadesTipo: ServiceSoap12Types.IActividadesTipo[];
    };
    Errors: ServiceSoap12Types.IErrors;
    Events: ServiceSoap12Types.IEvents;
  }
}

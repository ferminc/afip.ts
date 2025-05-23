import { IAccessTicket, ILoginCredentials, WSAuthParam } from "./../types";

import {
  ILoginCmsReturnCredentials,
  ILoginCmsReturnHeaders,
} from "../soap/interfaces/LoginCMSService/LoginCms";

export class AccessTicket implements IAccessTicket {
  readonly header: ILoginCmsReturnHeaders;
  readonly credentials: ILoginCmsReturnCredentials;

  constructor({ header, credentials }: ILoginCredentials) {
    this.header = header;
    this.credentials = credentials;
  }

  getSign(): string {
    return this.credentials.sign;
  }

  getToken(): string {
    return this.credentials.token;
  }

  getExpiration(): Date {
    return new Date(this.header[1].expirationtime);
  }

  getHeaders(): ILoginCmsReturnHeaders {
    return this.header;
  }

  getCredentials(): ILoginCmsReturnCredentials {
    return this.credentials;
  }

  getWSAuthFormat(cuit: number): WSAuthParam {
    return {
      Auth: {
        Token: this.getToken(),
        Sign: this.getSign(),
        Cuit: cuit,
      },
    };
  }

  public isExpired(): boolean {
    return this.getExpiration() < (new Date());
  }
}

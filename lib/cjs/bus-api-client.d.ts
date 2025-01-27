import AuthProvider from "./authentication/authentication-provider";
import { AxiosInstance } from "axios";
import { InstrumentUacDetails, InstrumentUacDetailsByCaseId, UacCount, UacImport } from "./interfaces/instrument-uac-details";
import { InstrumentUacDetailsMock, InstrumentUacDetailsByCaseIdMock, InstrumentDisabledUacDetailsMock } from "./mock-objects/instrument-uac-details-mocks";
declare class BusApiClient {
    BUS_API_URL: string;
    BUS_CLIENT_ID: string;
    httpClient: AxiosInstance;
    authProvider: AuthProvider;
    constructor(BUS_API_URL: string, BUS_CLIENT_ID: string, timeoutInMs?: number);
    generateUacCodes(instrumentName: string, caseIds: string[]): Promise<InstrumentUacDetails>;
    generateUacCodesForInstrument(instrumentName: string): Promise<InstrumentUacDetails>;
    getUacCodeCount(instrumentName: string): Promise<UacCount>;
    getUacCodes(instrumentName: string): Promise<InstrumentUacDetails>;
    getUacCodesByCaseId(instrumentName: string): Promise<InstrumentUacDetailsByCaseId>;
    importUACs(uacs: string[]): Promise<UacImport>;
    getDisabledUacCodes(instrumentName: string): Promise<InstrumentUacDetails>;
    enableUac(uac: string): Promise<any>;
    disableUac(uac: string): Promise<any>;
    private url;
    private get;
    private post;
}
export default BusApiClient;
export { InstrumentUacDetails, InstrumentUacDetailsByCaseId };
export { InstrumentUacDetailsMock, InstrumentUacDetailsByCaseIdMock, InstrumentDisabledUacDetailsMock };

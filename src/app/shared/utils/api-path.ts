export abstract class ApiPath {
    static readonly API_URL = 'https://localhost:7254/api/';

    static readonly FETCH_FLAT_TYPES_URL = `${ApiPath.API_URL}FlatType/GetFlatTypesAsyncEncrypted`;
}

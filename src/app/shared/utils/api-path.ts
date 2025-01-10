export abstract class ApiPath {
    static readonly API_URL = 'https://localhost:7254/api/';

    static readonly ADD_FLAT_TYPE_URL = `${ApiPath.API_URL}FlatType/AddFlatType`;
    static readonly MODIFY_FLAT_TYPE_URL = `${ApiPath.API_URL}FlatType/ModifyFlatType`;
    static readonly FETCH_FLAT_TYPES_URL = `${ApiPath.API_URL}FlatType/GetFlatTypesAsyncEncrypted`;
    static readonly REMOVE_FLAT_TYPE_URL = `${ApiPath.API_URL}FlatType/RemoveFlatType`;

    static readonly ADD_FLAT_URL = `${ApiPath.API_URL}Flat/AddFlat`;
    static readonly MODIFY_FLAT_URL = `${ApiPath.API_URL}Flat/ModifyFlat`;
    static readonly FETCH_FLATS_URL = `${ApiPath.API_URL}Flat/GetFlats`;
    static readonly REMOVE_FLAT_URL = `${ApiPath.API_URL}Flat/RemoveFlat`;

    static readonly ADD_OWNERSHIP_URL = `${ApiPath.API_URL}Ownership/AddOwnership`;
    static readonly MODIFY_OWNERSHIP_URL = `${ApiPath.API_URL}Ownership/ModifyOwnership`;
    static readonly FETCH_OWNERSHIPS_URL = `${ApiPath.API_URL}Ownership/GetOwnerships`;
    static readonly REMOVE_OWNERSHIP_URL = `${ApiPath.API_URL}Ownership/RemoveOwnership`;

    static readonly FETCH_FILE = `${ApiPath.API_URL}File/GetFile`;
}

import {
    IDS_REQUESTED,
    IDS_FETCHED,
    SHOPS_REQUESTED,
    SHOPS_FETCHED,
    SHOP_SELECTED,
    NAME_CHANGED,
    DESC_CHANGED,
    CREATING_SHOP
} from './ShopActions';

import {
    ACCOUNT_SELECTED
} from "../account/AccountActions";

const INITIAL_STATE = {
    newShop: {
        owner: null,
        name: "",
        description: "",
    },
    creatingShop: false,

    fetchingIds: false,
    idsFetched: false,
    ids:[],

    fetchingShops: false,
    shopsFetched: false,
    shops:[],

    selectedShopId: null
};

function shopReducer(state=INITIAL_STATE, action) {
    let reduced;
    switch (action.type)
    {
        case ACCOUNT_SELECTED:
            reduced = INITIAL_STATE;
            break;

        case IDS_REQUESTED:
            reduced = {
                ...state,
                fetchingIds: action.fetchingIds,
                idsFetched: action.idsFetched
            };
            break;

        case IDS_FETCHED:
            reduced = {
                ...state,
                fetchingIds: action.fetchingIds,
                idsFetched: action.idsFetched,
                ids: action.ids
            };
            break;

        case SHOPS_REQUESTED:
            reduced = {
                ...state,
                fetchingShops: action.fetchingShops,
                shopsFetched: action.shopsFetched,
            };
            break;

        case SHOPS_FETCHED:
            reduced = {
                ...state,
                fetchingShops: action.fetchingShops,
                shopsFetched: action.shopsFetched,
                shops: action.shops
            };
            break;

        case SHOP_SELECTED:
            reduced = {
                ...state,
                selectedShopId: action.selectedShopId
            };
            break;

        case NAME_CHANGED:
            reduced = {
                ...state,
                newShop: {
                    ...state.newShop,
                    name: action.name,
                }
            };
            break;

        case DESC_CHANGED:
            reduced = {
                ...state,
                newShop: {
                    ...state.newShop,
                    description: action.description,
                }
            };
            break;

        case CREATING_SHOP:
            reduced = {
                ...state,
                creatingShop: action.creatingShop,
                newShop: {
                    owner: action.owner,
                    name: action.name,
                    description: action.description
                }
            };
            break;

        default:
            reduced = state;
    }
    return reduced;
}

export default shopReducer;
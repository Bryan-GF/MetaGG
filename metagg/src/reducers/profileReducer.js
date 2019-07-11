import { SETTING_OVERVIEW, SETTING_OVERVIEW_SUCCESS, SETTING_OVERVIEW_FAILURE
} from '../actions';

const initialState = {
    overview: {},
    settingOverview: false,
    error: null
};


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTING_OVERVIEW:
        return {...state,
                settingOverview: true};
        case SETTING_OVERVIEW_SUCCESS:
            return {...state, 
                    overview: action.payload,
                    settingOverview: false};
        case SETTING_OVERVIEW_FAILURE:
            return {...state, 
                error: action.payload,
                settingOverview: false};
        default:
            return state;
    }
  };
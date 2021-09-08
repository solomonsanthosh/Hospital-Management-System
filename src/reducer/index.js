import { userReducer } from './userReducer';
import { patientReducer } from './patientReducer';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { doctorReducer } from './doctorReducer';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user','patient'],
};

const rootReducer = combineReducers({
	user: userReducer,
	patient: patientReducer,
   doctor: doctorReducer
});

export default persistReducer(persistConfig, rootReducer);

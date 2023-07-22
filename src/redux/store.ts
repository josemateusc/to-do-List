import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import atividadesReducer from "./features/atividades.slice"; // Importando o novo reducer

const rootReducer = combineReducers({
  atividades: atividadesReducer, // Adicionando o novo reducer no estado global
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["produto"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

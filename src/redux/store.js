// import { configureStore } from "@reduxjs/toolkit";
// import { contactsApi } from "./contactsApi";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { contactSlice } from "./contactsSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactSlice.reducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

// setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { todosReducer } from "./todos";
import authSliceReducer from "./auth/auth-slice";
import { contactSlice } from "./contactsSlice";
import { contactsApi } from "./contactsApi";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authSliceReducer),
    // todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

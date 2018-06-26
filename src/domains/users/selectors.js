export const context = (state) => state.users.context;
export const user = (state) => state.users.user;
export const isLoggedIn = (state) => !!state.users.context.accessToken;

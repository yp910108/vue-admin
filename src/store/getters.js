export default {
  device: (state) => state.app.device,
  language: (state) => state.app.language,
  sidebar: (state) => state.app.sidebar,
  token: (state) => state.user.token,
  permission_routers: (state) => state.permission.routers
}

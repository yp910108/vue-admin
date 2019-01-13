export default {
  device: (state) => state.app.device,
  language: (state) => state.app.language,
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  name: (state) => state.user.name,
  avatar: (state) => state.user.avatar,
  introduction: (state) => state.user.introduction,
  permission_routers: (state) => state.permission.routers,
  addRouters: (state) => state.permission.addRouters
}

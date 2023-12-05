export const state = () => ({
  isloggedIn: false,
})
export const getters = {
  checkLogin(state) {
    return state.isloggedIn
  },
}

export const mutations = {
  Set_Login(state, payload) {
    state.isloggedIn = payload
  },
}
export const actions = {
  Set_Login: function ({ commit }, payload) {
    commit('Set_Login', payload)
  },
}

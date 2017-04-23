const actions = {
  myFirstAction ({commit}, payload) {
    commit('setMyFirstActionVal', payload.foo)
  }
}

export default actions

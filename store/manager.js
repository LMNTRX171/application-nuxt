export const state = () => ({
    managers: [],
})

export const mutations = {
    setProduct(state, managers) {
      state.managers = managers
    },
}

export const actions = {
    async fetch({commit}) {
        const products = await this.$axios.$get("http://localhost:1337/managers")
        console.log(products);
        commit('setProduct', products)
    },
}

export const getters = {
    managers: s => s.managers,
}
export const state = () => ({
    applications: [],
})

export const mutations = {
    setProduct(state, applications) {
      state.applications = applications
    },
}

export const actions = {
    async fetch({commit}) {
        const products = await this.$axios.$get("http://localhost:1337/applications")
        console.log(products);
        commit('setProduct', products)
    },
}

export const getters = {
    applications: s => s.applications,
}
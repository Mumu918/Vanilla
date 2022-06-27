const darkMode = {
  state: () => ({ isDarkMode: false }),
  getters: {
    curDarkMode(state) {
      return state.isDarkMode ? 'dark' : 'light'
    }
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode
    }
  }
}
export default darkMode

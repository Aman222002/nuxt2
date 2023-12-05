export default function ({ store, redirect }) {
  if (store.state.isloggedIn) {
    return redirect('/')
  }
}

export default function ({ store, redirect }) {
  if (store.state.isloggedIn) {
    return true
  } else {
    return redirect('/login')
  }
}

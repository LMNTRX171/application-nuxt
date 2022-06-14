export default function ({store, redirect}) {
    let userRole = store.state.auth.user.role.name
    let managerRole = store.state.auth.manager.role.name
    console.log(userRole, managerRole);
    if(userRole == 'admin' || managerRole == 'manager') {
    }
    else{
      redirect('/')
    }
}
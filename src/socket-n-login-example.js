//функция работы с пользователем (логин/ сокеты), используется с стейт-менеджером MobX (для управления состоянием всего приложения)
// Ну и используются сокеты в

// class CurrentUser {
//     loggedIn = undefined
//     data = null
//     socket = null
//     namespaces = null
  
//     requested = false
//     retry = null
  
//     constructor() {
//       makeAutoObservable(this)
//     }
  
//     updateData(data) {
//       runInAction(() => {
//         this.data = { ...this.data, ...data }
//       })
//     }
  
//     logIn(data) {
//       runInAction(() => {
//         this.loggedIn = true
//         this.data = { ...data, renterDate, renterType, unlimitedDate }
//         this.socket = io(serverUrl, { withCredentials: true })  // empty url for samesite!
//         this.socket.on("connect", () => console.log("connected", this.socket.id))
//         this.socket.on("disconnect", () => console.log("disconnected", this.socket.id))
//         this.namespaces = {}
  
//         if (currentUser.requested) {
//           this.retry()
//           this.clean()
//         }
//       })
//     }
  
//     logOut() {
//       runInAction(() => {
//         this.loggedIn = false
//         this.data = null
//         this.disconnectAll()
//       })
//     }

        //   отключение от сокетов 
//     disconnectAll() {
//       runInAction(() => {
//         if (this.socket !== null) {
//           this.socket.disconnect()
//           this.socket = null
//         }
//         if (this.namespaces !== null) {
//           for (let sio of Object.entries(this.namespaces)) {
//             if (sio.disconnect) sio.disconnect()
//           }
//           this.namespaces = null
//         }
//       })
//     }

        //функция подключения, пример использования ниже
//     connectNamespace(namespace) {
//       runInAction(() => {
//         if (this.loggedIn) {
//           this.namespaces = { [namespace]: io(`${serverUrl}${namespace}`, { withCredentials: true }), ...this.namespaces }
//         } else {
//           console.log("Can't connect to a namespace: user not logged in")
//         }
//       })
//     }
  
//     disconnectNamespace(namespace) {
//       runInAction(() => {
//         if (this.namespaces && this.namespaces[namespace]) {
//           this.namespaces[namespace].disconnect()
//           delete this.namespaces[namespace]
//         }
//       })
//     }
//   }
  

//проверка авторизации с помощью куков
//используется в корневой папке app при первом рендере
// useEffect(() => {
//     if (currentUser.loggedIn === undefined) fetch(`${serverUrl}/users/me/data/`, {
//       method: "GET",
//       cache: "no-cache",
//       credentials: "include",
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then(data => currentUser.logIn(data))
//         console.log("cookie-based login complete")
//       } else {
//         currentUser.logOut()
//       }
//     })
//     else if (currentUser.loggedIn === true) return () => currentUser.disconnectAll()
//   }, [currentUser, currentUser.loggedIn])



// Функция чтобы получать информацию с сокетов
// export function useListen(currentUser, events_to_handlers, namespace, deps) {
//     useEffect(() => {
//       if (currentUser.loggedIn) {
//         for (let [event, handler] of Object.entries(events_to_handlers)) {
//           if (namespace === undefined) {
//             if (currentUser.socket) currentUser.socket.on(event, handler)
//             else console.log("Socket was not initialized for listening to", event)
//           }
//           else {
//             if (currentUser.namespaces[namespace]) currentUser.namespaces[namespace].on(event, handler)
//             else console.log("Namespace", namespace, "was not connected for listening to", event)
//           }
//         }
//         return () => {
//           for (let [event, handler] of Object.entries(events_to_handlers)) {
//             if (namespace === undefined) {
//               if (currentUser.socket) {
//                 currentUser.socket.off(event, handler)
//               }
//             } else if (currentUser.namespaces && currentUser.namespaces[namespace]) {
//               if (currentUser.namespaces !== undefined && currentUser.namespaces != null
//                 && currentUser.namespaces[namespace] !== undefined && currentUser.namespaces[namespace] !== null) {
//                 currentUser.namespaces[namespace].off(event, handler)
//               }
//             }
//           }
//         }
//       }
//     }, deps)
//   }
  

// функция подключения к каналу сокетов

//   export function useNamespace(currentUser, namespace) {
//     useEffect(() => {
//       if (currentUser.loggedIn) {
//         currentUser.connectNamespace(namespace)
//          
            //отключаться, по окончанию действия компоненты 
//         return () => currentUser.disconnectNamespace(namespace) 
//       }
//     }, [currentUser, currentUser.loggedIn, namespace])
//   }
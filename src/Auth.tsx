import {FC, useEffect, useState} from 'react'
import {getAuth, signInWithPopup} from 'firebase/auth'
import {app, googleAuthProvider} from './firebase'

export const AuthProvider: FC = () => {
  const auth = getAuth(app)
  const [user, setUser] = useState(auth.currentUser)

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (user !== null) {
        return setUser(user)
      }

      signInWithPopup(auth, googleAuthProvider)
        .then(credentials => setUser(credentials.user))
        .catch(error => console.log(error))
    })
  }, [auth])

  return user !== null ? <>{user?.displayName}</> : null
}

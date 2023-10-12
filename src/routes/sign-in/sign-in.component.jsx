import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SingIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SingIn;
import { auth } from "../config/firebase.js"
export const Auth = () => {
    return (
        <div>
            <input placeholder="Email..."/>
            <input placeholder="Password..." />
            <button>Sign In</button>
        </div>
    )
}
// import React, {Component} from 'react';
// import withFirebaseAuth from 'react-with-firebase-auth';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './../../firebase';


// const firebaseApp = firebase.initializeApp(firebaseConfig) 

// class Login extends Component {
//     constructor(props) {
//         super(props);
//     }
//                     onClick() {
//                         this.props.signInWithGoogle();
                    
//                     }
//                     componentDidUpdate() {
//                         console.log('Estoy en user logged')
//                         if(this.props.user != null && this.props.user != undefined){
//                         this.props.changeMode()    
//                         }  
//                         else{ console.log('No ha cambiado el mode')}
//                     }
//     render() {
//         const { user, signOut } = this.props;
//         console.log(this.props)
//         return(
//             <div>
//                 {console.log(this.props)}
//                 { user ? <p> Hello, {user.displayName} </p> : <p>Please, sign in</p>}
//                 { user ? <button onClick={signOut}>Sign Out</button> : <button onClick={this.onClick.bind(this)}>Sign in with Google</button>}
//                 {console.log(this.props)}
               
//             </div>
//         )
//     }
// }

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//     googleProvider : new firebase.auth.GoogleAuthProvider(),

// }
// // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// //     // Handle Errors here.
// //     var errorCode = error.code;
// //     var errorMessage = error.message;
// //     // ...
// //   });

// export default withFirebaseAuth({
//     providers,
//     firebaseAppAuth,
// })(Login);
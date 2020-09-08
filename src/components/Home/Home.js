 
import React, {useContext} from 'react';
import {firebaseAuth} from '../../provider/authProvider'


// const Home = (props) => {

//   const {handleSignout,} = useContext(firebaseAuth)
//   return (
//     <div>
//       Home, login successful!!!!!!
      
//       <button onClick={handleSignout}>sign out </button>
//     </div>
//   );
// };

// export default Home;

const Home = (props) => {

const {handleSignout,} = useContext(firebaseAuth)

  function onClick() {
    handleSignout();
    props.setMode(5);
  }

  return (
    <div>
      Home, login successful!!!!!!
      
      <button onClick={onClick}>sign out </button>
    </div>
  );
};

export default Home;


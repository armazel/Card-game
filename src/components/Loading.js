import React from 'react';

 const Loading = ({error,pastDelay})=> {
    /*return /!*(
        error ? <div>Error!</div>
            : <div>Loading...</div>
    )*!/*/
     if (error) {
         return <div>Error!</div>;
     } else if (pastDelay) {
         return <div>Loading...</div>;
     } else {
         return null;
     }
}

 export default Loading;
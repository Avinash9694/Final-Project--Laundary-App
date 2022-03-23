import React from 'react';
import { Link } from 'react-router-dom';
const Create=()=> {
    // React.useEffect(() => {
    //   let email = "avinash@gmail.com";
    //   let password = "avinash1234"
    //   axios.get(`http://localhost:5000/user/signin?emailId=${email}&password=${password}`)
    //   .then(res => {
    //     console.log("RESPONSE -> ", res);
    //   })
    // });
  
    return (
        <Link to="/" className='Proceed'>
    Proceed
</Link>
    )
}
export default Create
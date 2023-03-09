import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export default function Google() {
  const [user, setUser] = useState(null);

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
  }

  const handleSignOut = () => {
    setUser(null);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '377609520932-6mcs39i77rgbf20q0tspm6id2pokaujt.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'medium',
    });
  }, [user]);

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div id="signInDiv"></div>
      )}
    </div>
  );
}

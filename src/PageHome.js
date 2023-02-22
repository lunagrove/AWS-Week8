import {getCurrentUser} from './cognito.js'

function PageHome() {

  const user = getCurrentUser();

  return (
    <>
    {!user ? (
      <h2>Please log in, or create an account if you don't have one.</h2>
      ) : (
      <h2>You are currently logged in as: {user?.username}</h2>
      )}
    </>
  );
};

export default PageHome;
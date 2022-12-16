function About() {
  return (
    <>
      <div>Assumptions made</div>
      <div>
        - User can enroll only for the current month and the next 6 months only
      </div>
      <div>
        - User can make payment for 1 month at a time and has to choose the
        batch for each month ## The flow of the application
      </div>
      <div>
        - The home page of the application is displayed with a Navigation bar
        having options to SignUp, Home, About, Pay and LogOut
      </div>
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div></div>
      <div>1. SignUp</div>
      <div>
        - The user should first click on SignUp and fill out their details which
        will be stored in the SQL database
      </div>
      <div>- username: must be 4 or more characters </div>
      <div>- age: must be between 18 and 65</div>
      <div>- mobile no: must be 10 digits</div>
      <div>- password: must be 8 or more characters </div>
      <div></div>
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div>2. LogIn </div>
      <div>
        - After they have signed up successfully, they can click on Pay but will
        be redirected to LogIn as it's their first time{" "}
      </div>
      <div>
        - After providing the username and password, they are validated in the
        database{" "}
      </div>
      <div></div>
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div>3. Form filling </div>
      <div>
        - If valid, their username is stored in a cookie, and they will be
        redirected to the Form page where they must specify the batch they want
        to enroll and the month of payment{" "}
      </div>
      <div>
        - If that user has not done the payment before, they have done the
        payment successfully{" "}
      </div>
      <div></div>
      <div></div>
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div>4. Log Out </div>
      <div>
        - When they click on LogOut, the cookie will be removed, and they have
        to Log In again for payment
      </div>
      <div></div>
    </>
  );
}

export default About;

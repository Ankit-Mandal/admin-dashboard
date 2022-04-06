import "./newUser.scss";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserContainer">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" required />
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" required />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" required />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" required />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" required />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="Male" value="male" />
              <label for="Male">Male</label>
              <input type="radio" name="gender" id="Female" value="female" />
              <label for="Female">Female</label>
              <input type="radio" name="gender" id="Other" value="other" />
              <label for="Other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;

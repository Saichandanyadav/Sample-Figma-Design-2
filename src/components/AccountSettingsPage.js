import '../styles/AccountSettingsPage.css'

const AccountSettingsPage = () => (
  <div className="account-settings-container">
    <h1>Account Settings</h1>
    <div className="account-details">
      <img src="/path/to/user-image.jpg" alt="User" />
      <div>
        <h2>Username</h2>
        <input type="text" placeholder="alphauser" />
        <h2>Email</h2>
        <input type="email" placeholder="alphauser@gmail.com" />
      </div>
    </div>
    <div className="subscriptions">
      <h2>Subscriptions</h2>
      <div className="subscription-card">
        <p>You are currently on the Ques AI Basic Plan</p>
        <button type="button">Upgrade</button>
      </div>
    </div>
  </div>
)

export default AccountSettingsPage

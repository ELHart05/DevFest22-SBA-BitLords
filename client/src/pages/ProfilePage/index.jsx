import './style.css';

const ProfilePage = ({user}) => {
    return (
        <section className="profile">
            <form className="edit-profile">
                <label for="inputColor" className="user">
                    <span>{user.firstname[0]+user.lastname[0]}</span>
                </label>
                <input id="inputColor" type="color" />
                <div className="inputs">
                    <label for="first-name">First Name:</label>
                    <input value={user.firstname} type="text" id="first-name" />
                </div>
                <div className="inputs">
                    <label for="last-name">Last Name:</label>
                    <input value={user.lastname} type="text" id="last-name" />
                </div>
            
                <div className="inputs">
                    {/* email isn't untouchable */}
                    <label for="email">Email:</label>
                    <input value={user.email} className="protected" type="email" id="email" v-model="email" readOnly />
                </div>
                <div>
                    <button className="save-changes">SAVE CHANGES</button>
                </div>
            </form>
        </section>
    )
}

export default ProfilePage;
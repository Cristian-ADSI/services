export const Form = ({handleFormInputs, formData,handleCreateData}) => {
    return (
        <div className="contact__form">
            <h1>
                Add <span className="form">New Contact</span>{" "}
            </h1>
            <form action="">
                {/* Name  */}
                <div className="input__text">
                    <i className="fa-solid fa-user"></i>
                    <input
                        name="name"
                        onChange={handleFormInputs}
                        placeholder="Set the name"
                        required
                        type="text"
                        value={formData.name}
                    />
                </div>
                {/* Email  */}
                <div className="input__text">
                    <i className="fa-solid fa-envelope"></i>
                    <input
                        name="email"
                        onChange={handleFormInputs}
                        placeholder="Presonal email"
                        type="email"
                        required
                        value={formData.email}
                    />
                </div>
                {/* Phone  */}
                <div className="input__text">
                    <i className="fa-solid fa-phone"></i>
                    <input
                        name="phone"
                        onChange={handleFormInputs}
                        placeholder="Phone"
                        required
                        type="text"
                        value={formData.phone}
                    />
                </div>

                <button type="button" onClick={() => handleCreateData(formData)}>
                    <span>Save</span>
                </button>
            </form>
        </div>
    )
}

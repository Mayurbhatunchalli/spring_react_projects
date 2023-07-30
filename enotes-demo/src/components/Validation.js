const validate = (values) => {

    const errors = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;

    if (!values.username) {
        errors.username = "Username should not be empty !!";
    }

    if (!values.password) {
        errors.password = "Password is required !!";
    } else if (values.password.length < 3 || values.password.length > 10) {
        errors.password = "Password should be greater than 3 and less than 10 characters";
    }

    if (!values.email) {
        errors.email = "Email is required !!";
    } else if (!regex.test(values.email)) {
        errors.email = "Please enter valid email format";
    }

    if (!values.about) {
        errors.about = "Please enter about yourself !!";
    }
    return errors;
};

export default validate;
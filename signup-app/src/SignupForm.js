import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false,
    });

    const navigate = useNavigate(); // useNavigate hook

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!formData.agree) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        console.log(formData);
        navigate('/login'); // use navigate instead of history.push
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: '0 20px',
            backgroundColor: 'red', // Background color outside the box
        },
        box: {
            display: 'flex',
            backgroundColor: 'white', // Box color
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            maxWidth: '1000px',
            width: '100%',
            height:'600px'
        },
        imageContainer: {
            flex: '1',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px', // Adjust the space between image and form
        },
        image: {
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
        },
        formContainer: {
            flex: '1',
            padding: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        button: {
            marginTop: '20px',
            padding: '10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            width:'50%'
        },
        link: {
            marginTop: '10px',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                {/* Image Container on the Left */}
                <div style={styles.imageContainer}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/6d08/add4/e1ff0f0155d84c990839d2578e5bc3bb?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imcP9IZBqz57yNU2yRXzoyoWH6XIc28kW9IchyQYolwQbFFRhS9Hv9kBjwabY2k3tSRhGmTEmYBdXW55RpwEJ4l2WtWkIccJNHh7t-kenFXUzCYMU6LCwjnZk9hgAsHyJvbOefBmIBIH4lq4NF1pBiEM475Tudo6UwBIcD-BHGIo-~1l-evx01ak10Ty627jrPOzxhHXAbxjD0p~U~vqzDZBZa1-yxq25hu2MpYWeSQ8y~uSgSSl1M7BE8q5AA9VKb6YKyk-nOG1k2unHcrB4kG1eQ8~Ogu2Qg2rifAFPBtWdjegS0ibmAKYj2eAfPO7TdFRezlJkOPznJ03ftYYOg__"
                        alt="Sign Up"
                        style={styles.image}
                    />
                </div>

                {/* Form Container on the Right */}
                <div style={styles.formContainer}>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <h2>Sign Up</h2>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                        <label>
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                            />
                            I agree to all terms
                        </label>
                        <button type="submit" style={styles.button}>
                            Register
                        </button>
                        <p style={styles.link}>
                            Already have an account? <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;

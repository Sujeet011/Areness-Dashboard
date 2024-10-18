import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });
    
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        // Redirect to dashboard after login
        navigate('/dashboard'); // Use navigate to redirect
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'red', // Outer background color
            padding: '20px',
        },
        box: {
            display: 'flex',
            backgroundColor: 'white', // Box color
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '1000px', // Width of the box
            width: '100%',
            overflow: 'hidden',
            height: '60%'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%', // Form width
            padding: '20px',
        },
        imageContainer: {
            width: '50%', // Image container width
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '100%', // Image responsive width
            height: 'auto',
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        button: {
            width: '40%',
            padding: '10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px',
            borderRadius: '10px'
        },
        checkbox: {
            marginTop: '10px',
            alignSelf: 'flex-start',
        },
        link: {
            marginTop: '10px',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2>Log In</h2>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <label style={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={credentials.rememberMe}
                            onChange={handleChange}
                        />{' '}
                        Remember me
                    </label>
                    <button type="submit" style={styles.button}>Login</button>
                    <p style={styles.link}>
                        Don't have an account? <a href="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>Create one</a>
                    </p>
                </form>
                <div style={styles.imageContainer}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/aebf/3f1c/e468166d30a3ba064e731222dc4e66ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQBq4HHCEnjVt7S5KFC54t8NvG3wpIvxmmdguVZhPXFmVUetFOIdsMhz6JnlrWw2CrYvNVyS7XShLnWeOeqw1ce6bZSwP~plgBAeE1boRp6Mzu2T9Z-axzIQpcAp2cmZzF6cmClkUPaT-xDmrLDcpDDhEzHmHYxYlOrft1gP2Xs3U2fCl5wxCduPixU31JyeYO19e54v881RkogZ9QBIoWua2YlengbhMYUG6PeX~XGhcO7usYD8ETvk2UL6LPm8iC~A~0rWaySztX5mLARI5xV8hf01VSPfMKMbqdDD6ljF0gmN6CT2D~Bg2HeDwLVPr9T~6uV~MNGbDCQ76OToog__" // Replace with your actual image URL
                        alt="Login Illustration"
                        style={styles.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

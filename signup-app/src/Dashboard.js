import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [dateSettingsVisible, setDateSettingsVisible] = useState(false);
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : { name: '', email: '' }; // Default user if no data
    });

    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId); // Cleanup on unmount
    }, []);

    const toggleDateSettings = () => {
        setDateSettingsVisible(!dateSettingsVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data on logout
        navigate('/'); // Redirect to signup page
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <h1 style={styles.heading}>Dashboard</h1>
                <input type="text" placeholder="Search..." style={styles.searchBar} />
                <div style={styles.iconContainer}>
                    <img 
                        src="https://via.placeholder.com/24" 
                        alt="Bell Icon" 
                        style={styles.icon} 
                    />
                    <img 
                        src="https://via.placeholder.com/24" 
                        alt="Calendar Icon" 
                        onClick={toggleDateSettings} 
                        style={styles.icon} 
                    />
                </div>
                <div style={styles.dateTimeContainer}>
                    <p>{formatDate(currentTime)}</p>
                    <p>{formatTime(currentTime)}</p>
                </div>
            </nav>

            <div style={styles.mainContent}>
                <div style={styles.sidebar}>
                    <img 
                        src="https://via.placeholder.com/100" // Replace with user profile image
                        alt="Profile"
                        style={styles.profileImage} 
                    />
                    <div style={styles.userInfo}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                    <ul style={styles.sidebarList}>
                        <li style={styles.sidebarItem}>Dashboard</li>
                        <li style={styles.sidebarItem}>Vital Tasks</li>
                        <li style={styles.sidebarItem}>My Tasks</li>
                        <li style={styles.sidebarItem}>Task Categories</li>
                        <li style={styles.sidebarItem}>Settings</li>
                        <li style={styles.sidebarItem}>Help</li>
                    </ul>
                    <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                </div>

                <div style={styles.contentArea}>
                    {dateSettingsVisible && (
                        <div style={styles.dateSettings}>
                            <h3>Date Settings</h3>
                            {/* Add date settings options here */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        height: '100vh',
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'wheat',
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        margin: 0,
    },
    searchBar: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '700px',
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginLeft: '15px',
        cursor: 'pointer',
    },
    dateTimeContainer: {
        marginLeft: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'right', // Align text to the right for a cleaner look
    },
    mainContent: {
        display: 'flex',
        flex: 1,
        marginTop: '20px',
    },
    sidebar: {
        width: '250px',
        backgroundColor: 'red', // Default background color
        color: 'white', // Default text color
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        transition: 'background-color 0.3s, color 0.3s', // Smooth transition for color change
    },
    sidebarHover: {
        backgroundColor: 'white', // Background color on hover
        color: 'red', 
    },
    
    profileImage: {
        borderRadius: '50%',
        marginBottom: '10px',
        
    },
    userInfo: {
        marginBottom: '20px',
    },
    sidebarList: {
        listStyleType: 'none',
        padding: 0,
        width: '100%',
    },
    sidebarItem: {
        backgroundColor: 'transparent',
        padding: '15px',
        margin: '5px 0', 
        borderRadius: '8px', 
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
        cursor: 'pointer',
        width: '100%', 
        color: 'white',
        transition: 'background-color 0.2s, color 0.2s', 
    },
    logoutButton: {
        marginTop: '20px',
        padding: '10px 15px',
        backgroundColor: 'white',
        color: 'red',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s',
    },
    contentArea: {
        flex: 1,
        padding: '20px',
    },
    dateSettings: {
        margin: '20px 0',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
};

export default Dashboard;

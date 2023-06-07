const configs = {
    development: {
        SERVER_URI: 'http://localhost:5000',
    },
    production: {
        SERVER_URI: 'https://chat-app-back-end-ngocnamk3er-gmailcom.vercel.app',
    },
};

export default configs[process.env.NODE_ENV];
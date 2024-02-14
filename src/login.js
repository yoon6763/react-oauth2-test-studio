const Login = () => {
    const clientId = 'YOUR_CLIENT_ID'
    // example
    // const redirectUri = 'http://127.0.0.1:8080/api/oauth2/callback/google' // spring boot (backend로 redirect)
    const redirectUri = 'http://localhost:3000/redirect' // react (frontend로 redirect)

    return (<>
        <h1>Login</h1>
        <input type="button" value="Login with Google" onClick={() => {
            // 이메일 + 프로필
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&scope=email%20profile&redirect_uri=${redirectUri}`
        }}/>
    </>);
};

export default Login

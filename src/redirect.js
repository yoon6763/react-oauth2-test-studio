const Redirect = () => {
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(code)

    let name = "name initial value";
    let email = "email initial value";

    fetch(`http://localhost:8080/api/v1/oauth2/user/google?code=${code}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            name = data.name;
            email = data.email;

            document.getElementById("name").innerText = `Name: ${name}`;
            document.getElementById("email").innerText = `Email: ${email}`;
        })

    return (<>
        <h1>Redirect</h1>
        <p id={"name"}>Name: {name}</p>
        <p id={"email"}>Email: {email}</p>
    </>);
};

export default Redirect

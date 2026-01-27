<template>
     <div class="auth">
        <div class="login-card">
            <div class="header">
                <div class="logo">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h1>Добро пожаловать</h1>
                <p class="subtitle">Войдите в панель администратора</p>
            </div>

            <form id="loginForm" class="login-form">
                <div class="input-group">
                    <label for="username">
                        <i class="fas fa-user"></i>
                        Логин
                    </label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Введите ваш логин"
                        required
                    >
                    <div class="input-focus-line"></div>
                </div>

                <div class="input-group">
                    <label for="password">
                        <i class="fas fa-lock"></i>
                        Пароль
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Введите ваш пароль"
                        required
                    >
                    <div class="input-focus-line"></div>
                </div>

                <button type="submit" class="login-btn">
                    <i class="fas fa-sign-in-alt"></i>
                    Войти
                </button>
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style>
.auth {
    width: 100%;
    height: 100vh;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    font-family: "Montserrat";
}

.login-card {
    background-color: white;
    border-radius: 16px;
    padding: 40px 35px;
    box-shadow: 0 10px 30px rgba(49, 32, 17, 0.08);
    border: 1px solid rgba(49, 32, 17, 0.1);
}

.header {
    text-align: center;
    margin-bottom: 35px;
}

.logo {
    width: 70px;
    height: 70px;
    background-color: #FFF5E0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: #53402E;
    font-size: 32px;
}

h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #312011;
    letter-spacing: -0.5px;
    font-family: "Playfair Display";
}

.subtitle {
    font-size: 15px;
    color: #312011;
    opacity: 0.7;
    font-weight: 400;
}

.login-form {
    margin-bottom: 30px;
}

.input-group {
    margin-bottom: 24px;
    position: relative;
}

.input-group label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #312011;
}

.input-group label i {
    color: #53402E;
    font-size: 16px;
}

.input-group input {
    width: 100%;
    padding: 14px 16px;
    font-size: 16px;
    border: 2px solid rgba(49, 32, 17, 0.15);
    border-radius: 10px;
    background-color: white;
    color: #312011;
    transition: all 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: #53402E;
    background-color: #FFF5E0;
}

.login-btn {
    width: 100%;
    padding: 16px;
    background-color: #53402E;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.login-btn:hover {
    background-color: #42311f;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(83, 64, 46, 0.2);
}

.login-btn i {
    font-size: 18px;
}

@media (max-width: 480px) {
    .login-card {
        padding: 30px 25px;
    }
    
    h1 {
        font-size: 24px;
    }
    
    .logo {
        width: 60px;
        height: 60px;
        font-size: 28px;
    }
}
</style>
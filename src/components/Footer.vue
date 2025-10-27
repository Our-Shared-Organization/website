<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">Ω</div>
                </div>
                <div>
                    <h3 class="footer-title">Контакты</h3>
                    <div class="footer-info">
                        <p>+7 (912) 123-45-67</p>
                        <p>+7 (911) 123-45-67</p>
                        <p>Новокузнецкий проспект, дом 4, стр. С</p>
                    </div>
                </div>
                <div>
                    <h3 class="footer-title">Режим работы</h3>
                    <div class="footer-info">
                        <p>С 10:00 до 21:00 (Пн-Пт)</p>
                        <p>С 11:00 до 20:00 (Сб-Вс)</p>
                    </div>
                </div>
                <div>
                    <h3 class="footer-title">Мы в Instagram</h3>
                    <a href="https://instagram.com" class="instagram-link" target="_blank">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.footer {
    border-top: 1px solid #2d2d2d;
    background-color: #0a0a0a;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0;
}

@media (min-width: 768px) {
    .footer-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.footer-logo {
    font-size: 2.5rem;
    color: #fafafa;
}

.footer-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.footer-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-info p {
    font-size: 0.875rem;
    color: rgba(250, 250, 250, 0.6);
}

.instagram-link {
    display: inline-flex;
    align-items: center;
    color: rgba(250, 250, 250, 0.6);
    transition: color 0.3s;
}

.instagram-link:hover {
    color: #daa520;
}
</style>
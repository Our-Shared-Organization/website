<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
    <body>
        <NavBar />

        <!-- Main Content -->
        <main class="container contacts-content">
            <div style="width: 100%;">
                <h1 class="section-title">Контакты</h1>

                <div class="contacts-grid">
                    <div class="contact-block">
                        <h3>Контакты</h3>
                        <p>+7 (912) 123-45-67</p>
                        <p>+7 (911) 123-45-67</p>
                        <p>Новокузнецкий проспект, дом 4, стр. С</p>
                    </div>

                    <div class="contact-block">
                        <h3>Режим работы</h3>
                        <p>С 10:00 до 21:00 (Пн-Пт)</p>
                        <p>С 11:00 до 20:00 (Сб-Вс)</p>
                    </div>

                    <div class="contact-block">
                        <h3>Контакты</h3>
                        <p>+7 (912) 123-45-67</p>
                        <p>+7 (911) 123-45-67</p>
                        <p>Новокузнецкий проспект, дом 4, стр. С</p>
                    </div>

                    <div class="contact-block">
                        <h3>Режим работы</h3>
                        <p>С 10:00 до 21:00 (Пн-Пт)</p>
                        <p>С 11:00 до 20:00 (Сб-Вс)</p>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</template>

<style scoped>
.contacts-content {
    min-height: calc(100vh - 300px);
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
}

.contacts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .contacts-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .contacts-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.contact-block h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.contact-block p {
    color: rgba(250, 250, 250, 0.6);
    margin-bottom: 0.75rem;
}
</style>
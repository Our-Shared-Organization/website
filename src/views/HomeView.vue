<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <body>
        <NavBar />

        <!-- Main Content -->
        <main class="container" style="margin-top: 120px;">
            <!-- Hero Section -->
            <div class="hero">
                <div class="hero-photo">
                    <img src="https://sovcominvest.ru/uploads/photo/23049/image/f21af3dc86cd6abb479e682f8c2c081f.jpg" />
                </div>
                <div class="hero-text">
                    <h1>Салон красоты</h1>
                    <h2>«Beauty Woman»</h2>
                </div>
            </div>

            <!-- Services Section -->
            <section class="section">
                <h2 class="section-title">Наши услуги</h2>
                <div class="grid">
                    <div class="service-card">
                        <img src="../src/assets/service-hair.jpg" alt="Парикмахерские услуги">
                        <div class="overlay">
                            <h3>Парикмахерские услуги</h3>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../src/assets/service-nails.jpg" alt="Маникюр">
                        <div class="overlay">
                            <h3>Маникюр</h3>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../src/assets/service-cosmetology.jpg" alt="Макияж">
                        <div class="overlay">
                            <h3>Макияж</h3>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../src/assets/service-cosmetology.jpg" alt="Косметология">
                        <div class="overlay">
                            <h3>Косметология</h3>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../src/assets/service-nails.jpg" alt="Удаление волос">
                        <div class="overlay">
                            <h3>Удаление волос</h3>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../src/assets/service-hair.jpg" alt="Татуаж">
                        <div class="overlay">
                            <h3>Татуаж</h3>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Works Section -->
            <section class="section">
                <h2 class="section-title">Наши работы</h2>
                <div class="grid">
                    <div class="work-card">
                        <img src="../src/assets/work-1.jpg" alt="Работа 1">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-2.jpg" alt="Работа 2">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-3.jpg" alt="Работа 3">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-4.jpg" alt="Работа 4">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-5.jpg" alt="Работа 5">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-6.jpg" alt="Работа 6">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-7.jpg" alt="Работа 7">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-8.jpg" alt="Работа 8">
                    </div>
                    <div class="work-card">
                        <img src="../src/assets/work-9.jpg" alt="Работа 9">
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </body>
</template>
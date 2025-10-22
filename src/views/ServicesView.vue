<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <body>
        <NavBar />

        <!-- Main Content -->
        <main class="container" style="margin-top: 120px;">
            <h1 class="section-title">Цены на услуги</h1>

            <!-- Price Group 1 -->
            <div class="price-section">
                <div class="price-image">
                    <img src="@/assets/images/service-hair.jpg" alt="Женские стрижки">
                </div>
                <div class="price-list">
                    <div class="price-item">
                        <span class="price-name">Женская стрижка</span>
                        <span class="price-value">от 1500 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Мужская стрижка</span>
                        <span class="price-value">от 800 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Окрашивание волос</span>
                        <span class="price-value">от 3000 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Уход за волосами</span>
                        <span class="price-value">от 1200 ₽</span>
                    </div>
                </div>
            </div>

            <!-- Price Group 2 -->
            <div class="price-section">
                <div class="price-list">
                    <div class="price-item">
                        <span class="price-name">Женская стрижка</span>
                        <span class="price-value">от 1500 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Мужская стрижка</span>
                        <span class="price-value">от 800 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Окрашивание ногтей</span>
                        <span class="price-value">от 1200 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Уход за ногтями</span>
                        <span class="price-value">от 900 ₽</span>
                    </div>
                </div>
                <div class="price-image">
                    <img src="@/assets/images/service-nails.jpg" alt="Ногтевой сервис">
                </div>
            </div>

            <!-- Price Group 3 -->
            <div class="price-section">
                <div class="price-image">
                    <img src="@/assets/images/service-cosmetology.jpg" alt="Косметология">
                </div>
                <div class="price-list">
                    <div class="price-item">
                        <span class="price-name">Ботокс ресниц</span>
                        <span class="price-value">от 1400 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Ламинирование</span>
                        <span class="price-value">от 1300 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Окрашивание ресниц</span>
                        <span class="price-value">от 1000 ₽</span>
                    </div>
                    <div class="price-item">
                        <span class="price-name">Уход за лицом</span>
                        <span class="price-value">от 2500 ₽</span>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</template>
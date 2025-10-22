<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <body>
        <NavBar />

        <!-- Main Content -->
        <main class="container" style="margin-top: 120px;">
            <h1 class="section-title">Наши мастера</h1>

            <div class="masters-grid">
                <div class="master-card">
                    <div class="master-photo">
                        <!-- <img src="../src/assets/master-1.jpg" alt="Елена Васильевна"> -->
                    </div>
                    <div class="master-info">
                        <h3 class="master-name">Елена Васильевна</h3>
                        <p class="master-specialty">Визажист</p>
                    </div>
                </div>

                <div class="master-card">
                    <div class="master-photo">
                        <!-- <img src="../src/assets/master-2.jpg" alt="Елена Васильевна"> -->
                    </div>
                    <div class="master-info">
                        <h3 class="master-name">Елена Васильевна</h3>
                        <p class="master-specialty">Стилист</p>
                    </div>
                </div>

                <div class="master-card">
                    <div class="master-photo">
                        <!-- <img src="../src/assets/master-1.jpg" alt="Елена Васильевна"> -->
                    </div>
                    <div class="master-info">
                        <h3 class="master-name">Елена Васильевна</h3>
                        <p class="master-specialty">Визажист</p>
                    </div>
                </div>

                <div class="master-card">
                    <div class="master-photo">
                        <!-- <img src="../src/assets/master-3.jpg" alt="Елена Васильевна"> -->
                    </div>
                    <div class="master-info">
                        <h3 class="master-name">Елена Васильевна</h3>
                        <p class="master-specialty">Визажист</p>
                    </div>
                </div>

                <div class="master-card">
                    <div class="master-photo">
                        <!-- <img src="../src/assets/master-4.jpg" alt="Елена Васильевна"> -->
                    </div>
                    <div class="master-info">
                        <h3 class="master-name">Елена Васильевна</h3>
                        <p class="master-specialty">Барбер</p>
                    </div>
                </div>

                <div class="master-card">
                    <div class="master-photo">
                        <!-- <img src="../src/assets/master-5.jpg" alt="Елена Васильевна"> -->
                    </div>
                    <div class="master-info">
                        <h3 class="master-name">Елена Васильевна</h3>
                        <p class="master-specialty">Визажист</p>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</template>
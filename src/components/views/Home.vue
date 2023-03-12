<template lang="">
    <div id="home-container">
        <h2>Empleos Disponibles</h2>
        <template v-if="cards.length">
            <app-work-card v-for="obj in cards" :key="obj.id" :obj="obj"></app-work-card>
        </template>
    </div>
</template>
<script>

import AppWorkCard from '@/components/AppWorkCard'

export default {
    name: 'home-view',
    components: { AppWorkCard },
    data () {
        return {
            cards:
            [
                {
                    id: 1,
                    name: "Desarrollador FullStack",
                    company: "Dora",
                    location: "Remoto",
                    salary: "$ 4M - 6M COP",
                    vacants: "2 Vacantes",
                },
                {
                    id: 2,
                    name: "Digital Marketing Specialist",
                    company: "Bankuish",
                    location: "Remoto-Cualquier Lugar",
                    salary: "$ 4K - 6K USD",
                    vacants: "1 Vacantes",
                },
                {
                    id: 3,
                    name: "Arquitecto de IT",
                    company: "Data Tools",
                    location: "Bogota",
                    salary: "Confidencial",
                    vacants: "3 Vacantes",
                },
                {
                    id: 4,
                    name: "Desarrollador Backend .NET",
                    company: "Platzi",
                    location: "Presencial",
                    salary: "$ 4.5M - 6.5M COP",
                    vacants: "2 Vacantes",
                },
                {
                    id: 5,
                    name: "Desarrollador React",
                    company: "Dora",
                    location: "Remoto en Chile",
                    salary: "$ 2.9M - 3.5M CLP",
                    vacants: "1 Vacantes",
                },
                {
                    id: 6,
                    name: "Desarrollador Backend",
                    company: "Be Bolder",
                    location: "Presencial Barranquilla",
                    salary: "$ 8M - 9M COP",
                    vacants: "2 Vacantes",
                },
                {
                    id: 7,
                    name: "UX Designer FullStack",
                    company: "Vichara Technologies",
                    location: "Remoto en Colombia",
                    salary: "$ 5M - 8M COP",
                    vacants: "1 Vacantes",
                },
                {
                    id: 8,
                    name: "Paid Media Analyst",
                    company: "SM Digital S.A.S",
                    location: "Remoto En Argentina",
                    salary: "$ 4.6M - 6.2M COP",
                    vacants: "1 Vacantes",
                },
                {
                    id: 9,
                    name: "Auxiliar de Enfermeria",
                    company: "Confidencial",
                    location: "Antioquia",
                    salary: "$ 1M - 1.5M COP",
                    vacants: "2 Vacantes",
                },
                {
                    id: 10,
                    name: "Acount Manager cuentas de Gobierno ",
                    company: "Ladorian",
                    location: "Remoto",
                    salary: "$ 4M - 6M COP",
                    vacants: "1 Vacantes",
                },
            ]
        }
    }
    
}
</script>
<style scoped>
    #home-container {
        margin-top: 210px;  margin-left: 98px;
    }
</style>
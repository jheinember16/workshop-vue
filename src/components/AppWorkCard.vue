<template>
    <div id="caja">
        <b-container class="bv-example-row">
            <b-row class="jobs">
                <b-col cols="2" class="align-sobjf-center">
                    <center>
                        <img src="@/logos/logo.png" width="100"/>
                    </center>
                </b-col>
                <b-col>
                    <hr />
                    <b-row>
                        <b-col>
                            <h3>
                                {{ obj.name }}
                            </h3>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-icon icon="building" scale="1"></b-icon>
                            <span>{{ obj.company }}</span>
                        </b-col>
                        <b-col>
                            <b-icon icon="cash-stack" scale="1"></b-icon>
                            <span>{{ obj.salary }}</span>
                        </b-col>
                        <b-col>
                            <b-icon icon="geo-alt" scale="1"></b-icon>
                            <span>{{ obj.location }}</span>
                        </b-col>                        
                        <b-col>
                            <b-icon icon="people" scale="1"></b-icon>
                            <span>{{ obj.vacants }}</span>
                        </b-col>
                    </b-row>
                    <hr />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'work-card',
    props: {
        obj: {}
    }
}
</script>

<style scoped>
    #caja {
        margin-bottom: 1rem;
    }
    #caja:hover {
        cursor: pointer;
    }
    .jobs {
        border: 1px solid #dee2e6;
        padding: 1rem 0rem;
        background: white;
    }
    .jobs:hover {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2)!important;
    }

</style>
<script setup>
import contractImg from '@/assets/contracts.png'
import CreateContractHeader from '@/components/CreateContractHeader.vue';
</script>

<template>
    <div class="container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Select Contract Type (1/4)' :subHeaderImage='contractImg' />
        <div class="contract-type">
            <a>Contract Type</a>
            <div class="flex justify-left">
                <div>
                        <div class="radio">
                            <input id="radio-1" name="radio" type="radio" disabled >
                            <label for="radio-1" class="radio-label">Auction</label>
                        </div>

                        <div class="radio">
                            <input id="radio-2" name="radio" type="radio" disabled checked>
                            <label for="radio-2" class="radio-label">Courier</label>
                        </div>

                        <div class="radio">
                            <input id="radio-3" name="radio" type="radio" disabled>
                            <label for="radio-3" class="radio-label">Item Exchange</label>
                        </div>
                </div>
            </div>
        </div>
        <div class="availability">
            <a>Availability</a>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<style scoped>

.container {
    padding: .5em;
    margin: .5em;
}

.contract-type {}

.availability {}

.footer {}
</style>

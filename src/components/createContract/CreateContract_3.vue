<script setup>
import contractImg from '@/assets/contracts.png'
import courierContractImg from '@/assets/contractcourier.png'
import CreateContractHeader from '@/components/createContract/CreateContractHeader.vue';
import { mapState, storeToRefs } from 'pinia'
import { estimationStore } from '@/stores/estimation'

const {
    outboundStation,
    inboundStation,
    jitaSellvalue,
    totalReward,
    minReward,
    maxVolume,
    volume,
    volumeMarkup,
    volumeCost,
    maxCollateral,
    totalCollateral,
    collateral,
    collateralCost } = storeToRefs(estimationStore())
</script>

<template>
    <div class="container inner-container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Select Options (3/4)'
            :subHeaderImage='courierContractImg' />
        <div class="availability">
            <div>
                <div>
                    <div class="quote-line-item">
                        <label class="label" for="name">Ship To</label>
                        <div class="value" type="text" id="name" name="name">
                            {{ inboundStation }}</div>
                    </div>
                    <div class="quote-line-item">
                        <label class="label" for="name">Reward</label>
                        <div class="value" type="text" id="name" name="name">
                            {{ totalReward.toLocaleString() }}
                        </div>
                    </div>
                    <div class="quote-line-item">
                        <label class="label" for="name">Collateral</label>
                        <div class="value" type="text" id="name" name="name">
                            {{ collateral.toLocaleString() }}
                        </div>
                    </div>
                    <div class="quote-line-item">
                        <label class="label" for="name">Expiration</label>
                        <div class="value" type="text" id="name" name="name">
                            1 Week
                        </div>
                    </div>
                    <div class="quote-line-item">
                        <label class="label" for="name">Days to Complete</label>
                        <div class="value" type="text" id="name" name="name">
                            10
                        </div>
                    </div>
                    <div class="quote-line-item">
                        <label class="label" for="name">Description</label>
                        <div class="value" type="text" id="name" name="name">
                            Yo Mamma
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.inner-container {
    margin-top: .5em;
}


.quote-line-item {
    display: flex;
    justify-content: space-between;
    padding: .2em
}

.label {
    order: 1;
}

.value {
    order: 2;
}
</style>

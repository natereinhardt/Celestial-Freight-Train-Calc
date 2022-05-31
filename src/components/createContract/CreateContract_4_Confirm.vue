<script setup>
import { mapState, storeToRefs } from 'pinia'
import contractImg from '@/assets/contracts.png'
import courierContractImg from '@/assets/contractcourier.png'
import CreateContractHeader from '@/components/createContract/CreateContractHeader.vue';
import { createContractStore } from '@/stores/createContract'
import { estimationStore } from '@/stores/estimation'

const {
    outboundStation,
    inboundStation,
    items,
    volume,
    totalReward,
    collateral
} = storeToRefs(estimationStore())

const { loading, error, contractTo } = storeToRefs(createContractStore())

</script>

<template>
    <div class="container inner-container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Confirm (4/4)' :subHeaderImage='courierContractImg' />
        <div class="availability">
            <div class="flex justify-left">
                <div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Contract Type</label>
                        <div class="contractTo-text" type="text" id="name" name="name">
                            Courier</div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Description</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            (None)
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Availability</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            Private ({{ contractTo.toLocaleString() }})
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Location</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            {{ outboundStation }}
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Sales Tax</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            (None)
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Broker's Fee</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            10,000 ISK
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Deposit</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            {{ totalReward.toLocaleString() }} ISK
                        </div>
                    </div>



                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Reward</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            {{ totalReward.toLocaleString() }} ISK
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Collateral</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            {{ collateral.toLocaleString() }} ISK
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Desitnation</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            {{ inboundStation.toLocaleString() }}
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Days to complete</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            10
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Volume</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            {{ volume.toLocaleString() }}
                        </div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Items</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            Your items here
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
</style>

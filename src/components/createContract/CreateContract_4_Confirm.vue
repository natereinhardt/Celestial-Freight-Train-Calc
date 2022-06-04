<script setup>
import { storeToRefs } from 'pinia';
import contractImg from '@/assets/contracts.png';
import courierContractImg from '@/assets/contractcourier.png';
import CreateContractHeader from '@/components/createContract/CreateContractHeader.vue';
import { createContractStore } from '@/stores/createContract';
import { estimationStore } from '@/stores/estimation';

const {
  outboundStation,
  inboundStation,
  items,
  volume,
  totalReward,
  collateral,
} = storeToRefs(estimationStore());

const { loading, error, contractTo } = storeToRefs(createContractStore());
</script>

<template>
  <div class="container inner-container">
    <CreateContractHeader
      title="Create
            Contract"
      :titleImage="contractImg"
      subHeader="Confirm (4/4)"
      :subHeaderImage="courierContractImg"
    />
    <div>
      <div>
        <div>
          <div class="quote-line-item">
            <label class="label" for="name">Contract Type</label>
            <div class="value" type="text" id="name" name="name">Courier</div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Description</label>
            <div class="value" type="text" id="name" name="name">(None)</div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Availability</label>
            <div class="value" type="text" id="name" name="name">
              Private ({{ contractTo.toLocaleString() }})
            </div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Location</label>
            <div class="value" type="text" id="name" name="name">
              {{ outboundStation }}
            </div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Sales Tax</label>
            <div class="value" type="text" id="name" name="name">(None)</div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Broker's Fee</label>
            <div class="value" type="text" id="name" name="name">
              10,000 ISK
            </div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Deposit</label>
            <div class="value" type="text" id="name" name="name">
              {{
                totalReward.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }}
              ISK
            </div>
          </div>
          <div class="border-t my-2"></div>
          <div class="quote-line-item">
            <label class="label" for="name">Reward</label>
            <div class="value" type="text" id="name" name="name">
              {{
                totalReward.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }}
              ISK
            </div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Collateral</label>
            <div class="value" type="text" id="name" name="name">
              {{
                collateral.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }}
              ISK
            </div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Desitnation</label>
            <div class="value" type="text" id="name" name="name">
              {{ inboundStation.toLocaleString() }}
            </div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Days to complete</label>
            <div class="value" type="text" id="name" name="name">10</div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Volume</label>
            <div class="value" type="text" id="name" name="name">
              {{ volume.toLocaleString() }}
            </div>
          </div>
          <div class="quote-line-item">
            <label class="label" for="name">Items</label>
            <div class="value" type="text" id="name" name="name">
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
  margin-top: 0.5em;
}

.quote-line-item {
  display: flex;
  justify-content: space-between;
  padding: 0.2em;
}

.label {
  order: 1;
}

.value {
  padding-left: 1em;
  order: 2;
}
</style>

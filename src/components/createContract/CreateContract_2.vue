<script setup>
import contractImg from '@/assets/contracts.png'
import contractCourier from '@/assets/contractcourier.png'
import CreateContractHeader from '@/components/createContract/CreateContractHeader.vue'
import { storeToRefs } from 'pinia'
import { estimationStore } from '@/stores/estimation'

const { outboundStation, items, volume } = storeToRefs(estimationStore())
</script>

<template>
  <div class="container inner-container">
    <CreateContractHeader
      title="Create
            Contract"
      :titleImage="contractImg"
      subHeader="Pick Items (2/4)"
      :subHeaderImage="contractCourier"
    />
    <div class="availability">
      <div>
        <div>
          <div class="contractTo-container">
            <div class="outboundStation-text" type="text" id="name" name="name">
              {{ outboundStation }} ({{ items.length }} Items)
              <font-awesome-icon :icon="['fas', 'caret-down']" />
            </div>
            <div>
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </th>
                    <th>Type</th>
                    <th>Qty</th>
                    <th>Volume</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </td>
                    <td>You're item...</td>
                    <td>x</td>
                    <td>x.x</td>
                    <td>xxxx</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </td>
                    <td>You're item...</td>
                    <td>x</td>
                    <td>x.x</td>
                    <td>xxxx</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </td>
                    <td>You're item...</td>
                    <td>x</td>
                    <td>x.x</td>
                    <td>xxxx</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="num-items">
              Number of selected items: {{ items.length.toLocaleString() }} ({{
                volume.toLocaleString()
              }}
              m³)
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

.outboundStation-text {
  font-size: 0.8em;
  align-self: center;
  padding: 0.5em;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid grey;
  height: 2.5em;
  border-bottom-right-radius: 0.75em;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid grey;
  background-color: black;
}

.num-items {
  margin-top: 1em;
  margin-bottom: 1em;
}

/* When the checkbox is checked, add a black background */
.checkbox-container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 6px;
  top: 3px;
  width: 4px;
  height: 8px;
  border: solid rgb(8 145 178);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

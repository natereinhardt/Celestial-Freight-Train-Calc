<script setup>
import contractImg from '@/assets/contracts.png'
import { mapState, storeToRefs } from 'pinia'
import CreateContractHeader from '@/components/createContract/CreateContractHeader.vue';
import { createContractStore } from '@/stores/createContract'
const { loading, error, contractTo } = storeToRefs(createContractStore())
</script>

<template>
    <div class="container inner-container">
        <CreateContractHeader title='Create
            Contract' :titleImage="contractImg" subHeader='Select Contract Type (1/4)' :subHeaderImage='contractImg' />
        <div class="contract-type">
            <a>Contract Type</a>
            <div class="flex justify-left">
                <div>
                    <div class="radio">
                        <input id="radio-1" name="radio-1" type="radio" disabled>
                        <label for="radio-1" class="radio-label">Auction</label>
                    </div>

                    <div class="radio">
                        <input id="radio-2" name="radio-2" type="radio" checked>
                        <label for="radio-2" class="radio-label">Courier</label>
                    </div>

                    <div class="radio">
                        <input id="radio-3" name="radio-3" type="radio" disabled>
                        <label for="radio-3" class="radio-label">Item Exchange</label>
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        <label class="checkbox-label">Assembled Ships</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="availability">
            <a>Availability</a>
            <div class="flex justify-left">
                <div>
                    <div class="radio">
                        <input id="radio-4" name="radio-4" type="radio" disabled>
                        <label for="radio-4" class="radio-label">Public</label>
                    </div>

                    <div class="radio">
                        <input id="radio-5" name="radio-5" type="radio" checked>
                        <label for="radio-5" class="radio-label">Private</label>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Name</label>
                        <div class="contractTo-text" type="text" id="name" name="name">
                            {{ contractTo }}</div>
                    </div>
                    <div class="contractTo-container">
                        <label class="contractTo-label" for="name">Search By</label>
                        <div class="searchBy-text" type="text" id="name" name="name">
                            Exact Terms 
                            <font-awesome-icon :icon="['fas', 'caret-down']" />
                            </div>
                    </div>
                    <div class="radio">
                        <input id="radio-6" name="radio-6" type="radio" disabled>
                        <label for="radio-6" class="radio-label">My Corporation</label>
                    </div>
                    <div class="radio">
                        <input id="radio-7" name="radio-7" type="radio" disabled>
                        <label for="radio-7" class="radio-label">My Alliance</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<style scoped>
.inner-container {
    margin-top: .5em;
}

.checkbox-container {
    margin-left: 2em;
}

.contractTo-container {
    display: flex;
    margin: .5em;

}

.contractTo-label {
    align-self: center;
}

.contractTo-text {
    align-self: center;
    margin-left: 1em;
    padding: .5em;
    border: 1px solid grey;
    height: 2.5em;

}
.searchBy-text {
    align-self: center;
    margin-left: 1em;
    padding: .5em;
    border: 1px solid grey;
    height: 2.5em;
    border-bottom-right-radius: .75em;
}

.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

}

.checkbox-label {
    margin-left: 2em;
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

/* When the checkbox is checked, add a black background */
.checkbox-container input:checked~.checkmark {
    background-color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked~.checkmark:after {
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

/* 
.contract-type {}

.availability {}

.footer {} */
</style>

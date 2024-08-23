<template>
    <div v-if="isVisible" class="popup-dialog-overlay">
      <div class="popup-dialog">
        <div class="popup-dialog-header">
          <h3>{{ title }}</h3>
          <button class="close-button" @click="close">&times;</button>
        </div>
        <div class="popup-dialog-body">
          <slot></slot>
        </div>
        <div class="popup-dialog-footer">
          <button class="bg-blue-600 text-white p-2 rounded-md" @click="confirm">Confirm</button>
          <button class="bg-red-600 text-white p-2 rounded-md" @click="close">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ModalDialog",
    props: {
      title: {
        type: String,
        default: "Dialog Title",
      },
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      close() {
        this.$emit("close");
      },
      confirm() {
        this.$emit("confirm");
      },
    },
  };
  </script>
  
  <style scoped>
  .popup-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .popup-dialog {
    background: white;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .popup-dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .popup-dialog-body {
    margin-bottom: 20px;
  }
  
  .popup-dialog-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .popup-dialog-footer button {
    margin-left: 10px;
  }
  </style>
  
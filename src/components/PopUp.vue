<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container" :style="{ background: BgColor }">
                <div class="modal-inner-section">
                    <div class="container stars clear-both">
                        <span class="fa" :class="icons"></span>
                        <span class="fa star-big" :class="icons"></span>
                        <span class="fa" :class="icons"></span>
                    </div>
                    <div class="modal-header">
                        <slot name="header">
                            This is a default slot header here.
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            This is a default slot body here.
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            This is a default Footer here
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
    props: {
        Icon: {
            type: String,
            default: 'star'
        },
        BgColor: {
            type: String,
            default: '#c7614e'
        }
    },
    computed: {
        icons() {
            return 'fa-' + this.Icon
        }
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
    margin: 0px auto;
    background-color: #e07d66;
    border-radius: 100%;
    width: 500px;
    height: 500px;
    /* box-shadow: 0 2px 8px rgb(0 0 0 / 33%); */
    transition: all 0.3s ease;
    position: relative;
}

.modal-inner-section {
    border: 2px solid #fff;
    position: absolute;
    border-radius: 100%;
    width: 480px;
    height: 480px;
    margin: 10px;
}

.modal-header {
    text-align: center;
    margin-top: 5rem;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    color: #fff;
    border-bottom: none;
}

.modal-body {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  padding-top: 0;
  border-bottom: none;
}

.form-control-lg {
    height: 3.5rem;
    width: 100%;
    border: 1px;
    border-radius: 10px;
}

.modal-footer {
    border-top: none;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
    padding-top: 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.container-fluid {
    padding-right: 0px;
    padding-left: 0px;
}
.container-fluid input[type="submit"] {
    background: #4d4c4e;
    font-size: 2rem;
    border-radius: 15px;
    font-weight: bold;
}
.stars {
    text-align: center;
    margin-top: 1rem;
    position: absolute;
    color: #c7614e;
}
.stars .fa-star {
    font-size: 2rem;
    padding: 10px;
}
.star-big {
    font-size: 3rem !important;
}
</style>

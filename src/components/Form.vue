<template>
    <form class="p-2">
          <h2>Popup Editor <span @click="closeEditor" class="fa fa-close float-right"></span></h2>
          <hr />
          <loading :active.sync="isLoading" 
            :can-cancel="true"
            :is-full-page="fullPage"></loading>
          <draggable @change="eventListener" ghost-class="ghost">
              <transition-group>
                    <div v-for="element in items" :key="element.position" class="form-group">
                      <label for="input-text">{{ element.label }}</label>
                      <input
                        v-if="element.type === 'text' || element.type === 'email'"
                        :type="element.type"
                        class="form-control"
                        id="input-text"
                        :placeholder="element.property"
                        :value="element.value"
                        v-model="element.value"
                        @change="updateEditor(element)"
                      >
                      <textarea
                        v-if="element.type === 'textarea'"
                        :type="element.type"
                        class="form-control"
                        id="input-textarea"
                        :placeholder="element.property"
                        v-model="element.value"
                        @change="updateEditor(element)"
                        />
                    </div>
              </transition-group>
          </draggable>
        </form>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import draggable from 'vuedraggable'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            fullPage: false,
            isLoading: false
        }
    },
    components: {
        draggable,
        Loading
    },
    methods: {
        eventListener(event) {
            console.log(event)
        },
        async updateEditor(data) {
            try {
                this.isLoading = true
                const res = await axios.put('https://icy-reef-eec8smlv4f8s.vapor-farm-d1.com/api/field/' + data.id, { value: data.value })
                console.log(res.data)
                this.isLoading = false
            } catch (error) {
                console.log('error' + error)
            }
            console.log(data)
        },
        onCancel(e) {
            console.log(e)
        },
        closeEditor() {
            this.$store.commit('setEditor', false)
        }
    },
    computed: {
        ...mapGetters({
            items: 'items'
        })
    }
}
</script>

<style scoped>
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
</style>
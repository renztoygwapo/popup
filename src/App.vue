<template>
  <main>
    <pop-up
      v-show="showPopUp"
      v-if="items.length > 0"
      @close="showPopUp = false" :Icon="items[0].value" :bg-color="items[4].value"
      @mouseover.native="moveOver"
      @mouseleave.native="moveLeave"
    >
        <h4 slot="header">{{ items[1].value }}</h4>
        <div slot="body">
          <input type="text" :placeholder="items[2].value" class="form-control-lg">
        </div>
        <div slot="footer" class="container-fluid">
          <input type="submit" :value="items[3].value" class="btn btn-lg btn-secondary btn-block">
          <p class="text-center text-white mt-2">No credit card required. No Surprises</p>
        </div>
    </pop-up>
    <div class="container editor" v-if="editor">
      <Form />
    </div>
  </main>
</template>

<script>
import PopUp from './components/PopUp.vue'
import Form from './components/Form.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    PopUp,
    Form
  },
  data () {
    return {
      showPopUp: false
    }
  },
  computed: {
    ...mapGetters({
        items: 'items',
        editor: 'editor'
    })
  },
  async mounted () {
    this.getFields()
    // setTimeout(() => {
    //   this.showPopUp = true
    // }, 1000)
  },
  methods: {
    moveOver () {
      this.$store.commit('setEditor', false)
    },
    moveLeave () {
      this.$store.commit('setEditor', true)
    },
    async getFields () {
      try {
        const res = await axios.get('https://icy-reef-eec8smlv4f8s.vapor-farm-d1.com/api/field')
        this.$store.commit('setItems', res.data)
        this.showPopUp = true
      } catch (error) {
        console.log('error' + error)
      }
    }
  }
}
</script>

<style scoped>
  .editor {
    z-index: 9999;
    width: 30%;
    height: 100%;
    background: #fff;
    display: block;
    position: absolute;
    right: 0;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
  }
</style>

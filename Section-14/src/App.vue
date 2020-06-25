<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br />
        <br />
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>

        <transition name="slide" type="animation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some info</div>
          <div class="alert alert-warning" v-else key="warning">This is some info</div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="load = !load">Load/ Remove element</button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 100px; height:100px; background-color: lightgreen;" v-if="load"></div>
        </transition>
        <hr />
        <button class="btn btn-primary"></button>
        <br />
        <component :is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>

import DangerAlert from "./DangerAlert.vue"
import SuccessAlert from "./SuccessAlert.vue"

export default {
  data() {
    return {
      show: false,
      load: true,
      elementWidth: 100,
      selectedComponent: 'app-success-alert'
    },
  },
  components: {
      appDangerAlert: DangerAlert,
      appSuccessAlert: SuccessAlert,
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth;
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("after enter");
    },
    enterCancelled(el) {
      console.log("enter cancelled");
    },
    beforeLeave(el) {
      console.log("before Leave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("after leave");
    },
    leaveCancelled(el) {
      console.log("leave cancelled");
    }
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  /* transform: translateY(20px); */
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>

<template>
  <transition name="modalquiz" appear>
    <div class="modalquiz modal-overlay" @click.self="$emit('close')">
      <!-- <div class="modal modal-overlay" @click.self="$emit('next')">
        <div class="modal modal-overlay" @click.self="$emit('commentary')"> -->
      <div class="modalquiz-window">
        <div class="modalquiz-content"><slot /></div>
        <footer class="modalquiz-footer">
          <slot name="footer">
            <button @click="$emit('close')">閉じる</button>
            <!-- <button @click="$emit('commentary')">解説</button> -->
            <button @click="$emit('next')">次の問題へ</button>
          </slot>
        </footer>
      </div>
    </div>
    <!-- </div>
    </div> -->
  </transition>
</template>

<style lang="stylus" scoped>
.modalquiz {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;

  }

  &-content {
    padding: 90px 50px;
  }

  &-footer {
    background: #e5e2df;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>

<template>
  <div class="container">
    <div class="row containerwrap">
      <div class="column">
        <div class="block">
          <div class="row">
            <div class="column ">
              <p>container</p>
              <div class="column">
                <div class="block">
                  <div class="row">
                    <div class="column vakken">
                      <p>textvak</p>
                   
                    </div>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="block">
                  <div class="row">
                    <div class="column text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam quasi impedit aspernatur eligendi
                        architecto cum voluptatibus, possimus nulla. Veniam
                        harum architecto aspernatur vel temporibus itaque ipsa
                        explicabo quisquam corporis ipsum?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  methods: {
    click(index) {
      this.$router.push(index);
    },
  },
};
</script>


<style  lang="scss"scoped>
.container {
  background: yellow;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
}
.text {
  background: chartreuse;
  height: 80vh;
}
.vakken {
  background: var(--blue);
}

</style>
<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <sidebar-link to="/" name="XSS Payload Fires" icon="fas fa-fire" />
                <sidebar-link to="/xsspayloads" name="XSS Payloads" icon="fas fa-file-code" />
                <sidebar-link to="/settings" name="Settings" icon="fas fa-cogs" />
                <li class="nav-item mt-5">
                  <a target="_blank" href="https://github.com/l4rm4nd/xsshunter" class="nav-link">
                    <i class="fab fa-github"></i>
                    <p>On Github</p>
                  </a>
                </li>
            </template>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>
            <dashboard-content @click.native="toggleSidebar">
            </dashboard-content>
            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        MobileMenu
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        }
    }
};
</script>

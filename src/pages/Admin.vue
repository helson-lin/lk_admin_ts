<template>
    <div class="layout">
        <Layout>
            <!--头部-->
            <Header>
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo">
                        <img :src="logo" alt="logo" />
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="4">
                            <Avatar
                                src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                            />
                        </MenuItem>
                        <MenuItem name="3" @click="changeFullscreen">
                            <Icon custom="iconfont icon-fullscreen" size="20" />
                        </MenuItem>
                        <MenuItem name="1">
                            <Icon custom="iconfont icon-message" size="20" />
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon custom="iconfont icon-setting" size="20" />
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <!-- 左侧 -->
                <Sider hide-trigger style="background: #fff">
                    <Menu
                        :active-name="activeName"
                        theme="light"
                        width="auto"
                        :open-names="[activeName]"
                        @on-select="selectMenu"
                    >
                        <MenuItem
                            v-for="menu in menuList"
                            :key="menu.name"
                            :name="menu.name"
                        >
                            <Icon :custom="menu.icon" size="18"></Icon>
                            <span style="font-size: 14px; margin-left: 10px">{{
                                menu.name
                            }}</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <!-- 中间-->
                <Layout :style="{ padding: '24px 24px 24px' }">
                    <Content :style="{ minHeight: '280px' }">
                        <RouterView />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script setup lang="ts">
import { MenuItem } from "view-ui-plus";
import logo from "../assets/img/logo.png";
import useMenu from "../store/menu";

const menu = useMenu();
const router = useRouter();
const menuList = computed(() => {
    return menu.list;
});
const activeName = computed(() => {
    return menu.active;
});

const selectMenu = (menuName: string) => {
    const menuItem: MenuItem[] = menuList.value.filter(
        (i: MenuItem) => i.name === menuName
    );
    if (!menuItem[0]) return;
    router.push(menuItem[0].path);
    menu.addMenu(menuItem[0]);
    if (menuItem[0].pid === "0") {
        menu.setMeu(menuItem[0]);
    } else {
        menu.setMeu(menuItem[0]);
    }
};

let fullscreen = false;
/**
 * @DESCRIPTION 全屏操作
 */
const changeFullscreen = () => {
    const element = document.documentElement;
    // 如果是全屏状态
    if (fullscreen) {
        // 如果浏览器有这个Function
        document?.exitFullscreen();
    } else {
        // 如果浏览器有这个Function
        element?.requestFullscreen();
    }
    // 判断全屏状态的变量
    fullscreen = !fullscreen;
};
onMounted(() => {
    menu.getMenuData();
});
</script>
<style lang="scss" scoped>
.layout {
    height: 100%;
    background: #f5f7f9;
    overflow: hidden;

    .ivu-layout {
        height: 100%;

        .ivu-menu-horizontal.ivu-menu-light:after {
            display: none;
        }

        .ivu-layout-header {
            padding-left: 20px;
            padding-right: 20px;
            background-color: #fff;
        }

        .breadcrumb {
            margin: 14px 0;
            padding: 10px 10px;
            box-sizing: border-box;
            background: #fff;
        }

        .ivu-layout-content {
            padding: 0;
        }

        .ivu-layout-sider {
            background-color: #fff;
        }
    }
}

.layout-logo {
    width: 168px;
    height: 60px;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 20px;

    img {
        width: 100%;
        height: 100%;
    }
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>

<template>
    <div class="layout">
        <Layout>
            <!--头部-->
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <img :src="logo" alt="logo" />
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="3">
                        <Icon type="md-qr-scanner" size="20" />
                        </MenuItem>
                        <MenuItem name="4">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <!-- 左侧 -->
                <Sider hide-trigger style="background: #fff;">
                    <Menu :active-name="activeName" theme="light" width="auto" :open-names="[activeName]"
                        @on-select="selectMenu">
                        <MenuItem v-for="menu in menuList" :key="menu.name" :name="menu.name">
                        <Icon :type="menu.icon"></Icon>
                        {{ menu.name }}
                        </MenuItem>
                    </Menu>
                </Sider>
                <!-- 中间-->
                <Layout :style="{ padding: '0 24px 24px' }">
                    <Breadcrumb class="breadcrumb">
                        <Icon type="ios-apps" style="margin-right: 10px"/>
                        <BreadcrumbItem v-for="(item, index) in breadList" :key="index">{{ item.name }}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
                        <RouterView />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script setup lang="ts">
import { MenuItem } from 'view-ui-plus';
import logo from '../assets/img/logo.png'
import useMenu from '../store/menu'
const menu = useMenu()
const router = useRouter()
const menuList = computed(() => {
    return menu.list
})
const activeName = computed(() => {
    return menu.active
})
const breadList = computed(() => {
    return menu.activeMenu
})
const selectMenu = (menuName: string) => {
    console.log(menuList)
    const menuItem: MenuItem[] = menuList.value.filter((i: MenuItem) => i.name === menuName)
    if (!menuItem[0]) return;
    router.push(menuItem[0].path);
    menu.addMenu(menuItem[0])
    if(menuItem[0].pid === '0') {
        menu.setMeu(menuItem[0])
    } else {
        menu.setMeu(menuItem[0])
    }
}
onMounted(() => {
    menu.getMenuData()
})
</script>
<style lang="scss" scoped>
.layout {
    height: 100%;
    background: #f5f7f9;
    overflow: hidden;

    .ivu-layout {
        height: 100%;

        .ivu-layout-header {
            padding-right: 20px;
        }
        .breadcrumb {
            margin: 14px 0;
            padding: 10px 10px;
            box-sizing: border-box;
            background: #fff;
        }
        .ivu-layout-sider {
            background-color: #fff;
        }
    }
}

.layout-logo {
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;

    img {
        width: 100%;
        height: auto;
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

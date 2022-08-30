<template>
  <div class="layout">
    <Layout>
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
        <Sider hide-trigger style="background: #fff;">
          <Menu :active-name="activeName" theme="light" width="auto" :open-names="[activeName]" @on-select="selectMenu">
            <MenuItem v-for="menu in menuList" :key="menu.name" :name="menu.name">
            <Icon :type="menu.icon"></Icon>
            {{menu.name}}
            </MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
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
const selectMenu = (menu: string) => {
  console.log(menuList)
  const menuItem: MenuItem[] = menuList.value.filter((i: MenuItem) => i.name === menu)
  if(menuItem[0]) {
    router.push(menuItem[0].path);
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

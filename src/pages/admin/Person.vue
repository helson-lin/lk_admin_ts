<template>
    <Table :columns="columns" :data="data">
        <template #action="{ row, index }">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>
</template>
<script setup lang="ts">
import axios from '../../plugins/axios'
const columns = [
    {
        title: '用户名',
        key: 'username'
    },
    {
        title: '部门',
        key: 'department'
    },
    {
        title: '创建时间',
        key: 'crtTm'
    },
    {
        title: '操作',
        slot: 'action',
        width: 150,
        align: 'center'
    }
]

const data = ref<Api.UserItem[]>([]);
/**
 * @description 请求列表数据
 */
const getData = async () => {
    const res = await axios({
        url: 'getUserData',
        method: 'GET',
    })
    if (res.code === 200) {
        data.value = res.data.list;
        console.log(data, "dataChanged")
    }
    console.log(res)
}
const show = (index: number) => { };
const remove = (indx: number) => {

};
getData()
watchEffect(() => {
    console.log("data")
})
</script>

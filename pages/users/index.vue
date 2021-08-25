<template>
    <div class="container">
        
        <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Trang chủ</li>
                <li class="breadcrumb-item active" aria-current="page">Người dùng</li>
            </ol>
        </nav>
        <table class="table border">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Tổng số người dùng</th>
                <th scope="col">Số lượng nam</th>
                <th scope="col">Số lượng nữ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>{{users.length}}</td>
                    <td>{{genderFemale}}</td>
                    <td>{{genderMale}}</td>
                </tr>
            </tbody>
        </table>
        <NuxtLink to="users/add"><button class="btn btn-primary mb-3">Thêm người dùng</button></NuxtLink>
        <table class="table table-hover border">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Chỉnh sửa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <th scope="row">{{index}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.gender}}</td>
                    <td>
                        <NuxtLink :to="'/users/' + user.id"><button class="btn btn-primary btn-sm">Sửa</button></NuxtLink>
                        <button class="btn btn-danger btn-sm" data-toggle="modal" :data-target="'#exampleModal' + index">Xóa</button>
                        
                        <!-- Modal -->
                        <div class="modal fade" :id="'exampleModal' + index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Cảnh báo</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p><b>Bạn có chắc chắn muốn xóa người dùng?</b></p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                    <button @click="deleteUser(user.id)" type="button" class="btn btn-danger">Xóa</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'User',
    computed:{
        ...mapState(['users']),
        genderMale(){
            return this.$store.state.users.filter(
                user => user.gender === 'Nữ'
            ).length
        },
        genderFemale(){
            return this.$store.state.users.filter(
                user => user.gender === 'Nam'
            ).length
        }
    },
    created(){
        this.getUsers();
    },
    methods: {
        ...mapActions(['getUsers', 'deleteUser'])
    },
   
}
</script>
<template>
  <div class="container">
      <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Trang chủ</li>
                <li class="breadcrumb-item active" aria-current="page">Người dùng</li>
                <li class="breadcrumb-item active" aria-current="page">Sửa thông tin</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label>Name </label>
                        <input type="text" class="form-control" v-model="users.name">
                    </div>
                    <div class="form-group">
                        <label>Email </label>
                        <input type="email" class="form-control" v-model="users.email">
                    </div>
                    <div class="form-group">
                        <label> Tuổi </label>
                        <input type="number" class="form-control" v-model="users.age">
                    </div>
                    <div class="form-group">
                        <div>
                            <label>Giới tính </label>
                            <label class="ml-4">Nam</label>
                            <input type="radio" name="gender" value="Nam" v-model="users.gender" checked>
                            <label class="ml-4">Nữ</label>
                            <input type="radio" name="gender" value="Nữ" v-model="users.gender">
                        </div>
                    </div>
                    <button @click="editUser" type="submit" class="btn btn-primary">Cập nhật</button>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
        
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Edit Users',
    data(){
        return{
            users: {
                name: '',
                email: '',
                age: '',
                gender: ''  
            }
        }
    },
    methods: {
        async editUser(){
            await axios.put("http://localhost:3000/users/"+this.$route.params.id,{
                name: this.users.name,
                email: this.users.email,
                age: this.users.age,
                gender: this.users.gender
            });
            this.$router.back()
        }
    },
    async mounted() {
        const result = await axios.get('http://localhost:3000/users/'+this.$route.params.id);
        this.users=result.data;
    }
}
</script>

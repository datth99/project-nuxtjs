<template>
  <div class="container">
      <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Trang chủ</li>
                <li class="breadcrumb-item active" aria-current="page">Người dùng</li>
                <li class="breadcrumb-item active" aria-current="page">Thêm người dùng</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <p v-if="errors.length">
                    <div class="mr-2 ml-2 alert alert-danger" role="alert" 
                    v-for="error in errors" :key="error">{{ error }}</div>
                </p>
                <form @submit="onChangeTitle">
                    <div class="form-group">
                        <label>Tên </label>
                        <input type="text" class="form-control" v-model="name" >
                       
                    </div>
                    <div class="form-group">
                        <label>Email </label>
                        <input type="text" class="form-control" v-model="email" >
                        
                    </div>
                    <div class="form-group">
                        <label> Tuổi </label>
                        <input type="number" class="form-control" v-model="age">
                    </div>
                    <div class="form-group">
                        
                        <div>
                            <label>Giới tính </label>
                            <label class="ml-4">Nam</label>
                            <input type="radio" name="gender" value="Nam" v-model="gender" >
                       
                            <label class="ml-4">Nữ</label>
                            <input type="radio" name="gender" value="Nữ" checked v-model="gender">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Thêm</button>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
        
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {v4 as uuidv4} from 'uuid'
export default {
    name: 'Add Users',
    data(){
        return{
            errors: [],
            name: '',
            email: '',
            age: '',
            gender: ''  
        }
    },
    
    methods: {
        ...mapActions(['addUser']),

        onChangeTitle(event){
            event.preventDefault()
            this.errors = [];
            if (!this.name) {
                this.errors.push('Tên không được để trống!');
            }
            if (!this.email) {
                this.errors.push('Email không được để trống!');
            }else if (!this.validEmail(this.email)) {
                this.errors.push('Email không đúng định dạng!');
            }
            
            if(!this.age){
                this.errors.push('Tuổi không được để trống!');
            }
            if(this.name && this.name.length > 15 || this.name && this.name.length < 5){
                this.errors.push('Tên phải tối thiểu 6 kí tự và tối đa 15 kí tự!');
            }
            if(this.age && this.age.length > 2){
                this.errors.push('Tuổi không được vượt quá 100!');
            }
            if(!this.errors.length){
                this.addUser({
                    id: uuidv4(),
                    name: this.name,
                    email: this.email,
                    age: this.age,
                    gender: this.gender,
                })
                this.$router.push('/users');
            }
        },
        validEmail(email) {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
    }
}
</script>

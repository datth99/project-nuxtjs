<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <span class="navbar-brand mr-4 ml-2" href="#"><b>USER ADMIN</b></span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Trang chủ</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/users">Người dùng</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/blogs">Bài viết</nuxt-link>
            </li>
            </ul>
           
            <div>
                <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Trịnh Huy Đạt
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Thông tin cá nhân</a>
                    <a class="dropdown-item" href="#">Cài đặt</a>
                    <a class="dropdown-item" href="#">Đăng xuất</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<style>
    .nuxt-link-exact-active{
        background-color: #dc3545;
        color: #fff !important;
        font-weight: 700;
    }
    
</style>

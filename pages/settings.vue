<template>
    <div id="setting">
        <ul>
            <li><nuxt-link to="/settings/staffs">Setting Staff</nuxt-link></li>
            <li><nuxt-link to="/settings/users">Setting Users</nuxt-link></li>
            <li><nuxt-link to="/settings/banners">Setting Banners</nuxt-link></li>
        </ul>
        <nuxt-child />
    </div>
</template>

<style lang="css">
    #setting{
        display: flex;
    }
    #setting .main{
        margin-left: 3rem;
    }
</style>
<template>
  <div class="container">
      <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Trang chủ</li>
                <li class="breadcrumb-item active" aria-current="page">Bài viết</li>
            </ol>
        </nav>
      <h3 class="card-header card mt-4">Danh sách bài viết </h3>
      <div class="card mt-4" v-for="blog in blogs" :key="blog">
        <div class="card-header">
            {{blog.title}}
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p>{{blog.description}}</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: "Blogs",
    data(){
        return {
            blogs: [{"title":"Direct Configuration Analyst","description":"Laudantium modi dolores. Omnis soluta quia eius saepe. Provident consequatur saepe totam molestiae praesentium sint. Veniam animi quo ea qui voluptatem culpa quis et et. Quis vitae ipsam provident ut.\n \rIllo reiciendis nam. Id saepe et quia nesciunt. Aut ut sit.\n \rItaque accusamus ipsam sunt sed. Ea veritatis voluptate omnis molestiae impedit adipisci. Nobis sapiente voluptates soluta et possimus officiis. Accusamus enim et autem velit qui quaerat corporis fuga aspernatur.","id":"1"},{"title":"Customer Branding Assistant","description":"Accusamus illo corrupti id in ullam. Delectus odit facere magnam et exercitationem quia. Accusantium aperiam dolorem nemo adipisci qui aspernatur et odit rerum. Eos reprehenderit veniam sint atque consequatur.\n \rSed laboriosam in est possimus ut. Et rerum ut esse quas dolor officiis a ut ut. Nihil quaerat aut.\n \rOmnis quas et aliquam voluptatibus impedit dicta sit et. Sequi cumque quos et deleniti totam dolorem et. Dignissimos alias tempore voluptate cumque et aliquam.","id":"2"},{"title":"Legacy Paradigm Designer","description":"Est optio esse fugit sed sed id. Eos possimus ex et nisi asperiores ullam animi. Nihil reiciendis harum dignissimos eos quia autem. Cum a dicta sunt. Quia et error libero quia deleniti error non.\n \rAd impedit non sint voluptate optio harum. Consequatur ut ea libero. Quod ut autem ducimus autem eligendi hic expedita quaerat. Nobis dicta odit minima libero animi unde tempore. Quo quam voluptatem est adipisci debitis quisquam id ex.\n \rProvident placeat voluptas enim consequatur qui illo quis repellat nihil. Sunt libero voluptatem ipsum at cumque quo. Dolor debitis qui odit nulla quo.","id":"3"},{"title":"Future Accountability Assistant","description":"Veritatis exercitationem ea est magni accusantium voluptatem fuga error. Rerum quia maiores et nemo. Et voluptate ut autem minima quos.\n \rAnimi vel et laudantium nostrum doloremque iste deleniti nemo. Consequuntur ratione eos quae recusandae at. Rem iusto repudiandae eaque qui aut accusantium quae dolore est.\n \rTemporibus molestiae est voluptatibus architecto. Nihil perferendis dolorem veniam odio non qui. Aut voluptatum qui necessitatibus quia.","id":"4"},{"title":"Internal Tactics Engineer","description":"Optio quia ipsum deleniti sit eos velit tempora nam inventore. Quod est reiciendis dolorem ut temporibus. Non sit dignissimos iusto enim qui necessitatibus eum tenetur. Nostrum doloremque iste magni accusamus qui inventore et et a.\n \rSit consequatur iure consequuntur et culpa. Rem debitis dolor. Enim hic et. Repellendus autem asperiores sunt repellendus sint quae ut et repudiandae. Animi est est totam quod est corporis distinctio. Praesentium placeat numquam fugiat ducimus dignissimos voluptatum.\n \rRatione deserunt nisi rerum veritatis deleniti. Fugit nobis debitis. Laborum consequatur nam reiciendis nemo amet. Eius optio autem error id dolore autem consequatur repudiandae aut. Dolorem unde suscipit magni nihil omnis corporis odio.","id":"5"},{"title":"Dynamic Accountability Administrator","description":"Rerum consequatur omnis vitae ea voluptatem et quo corporis neque. Ullam fugiat provident quod eum velit hic qui. Corrupti nihil dolore animi voluptatem ut nostrum eos itaque. Et ut non.\n \rIste est sed fuga vel in ab ut. Molestiae officia fuga et laborum sint. Ea voluptatem similique perferendis in. Voluptatem quasi iusto quam et doloremque. Earum dolores repellendus laboriosam sed repellat vitae.\n \rDolorum dolorem molestiae reiciendis eius natus. Nulla fugit nihil et reiciendis eum aut qui. Autem autem non. Quam ratione velit placeat velit aperiam dolorem. Ut ut veniam soluta.","id":"6"}]
        }
   }
}
</script>


var posts=["2025/11/15/hello-world/","2026/01/16/这是一篇新的文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
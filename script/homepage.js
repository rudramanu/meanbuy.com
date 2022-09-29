let products=[
    {image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk5XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Skmei Luxury Quartz Watch",
      rating: "4.6/5 *",
      price: 3099,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9Db2ZmZWVfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      brandName: "Dual Movt Quartz Wristwatch",
      rating: "4.6/5 *",
      price: 2499,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NzY2XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      brandName: "CURREN Quartz Watch",
      rating: "4.5/5 *",
      price: 2199,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Ultra-thin Steel Belt Watch",
      rating: "4.5/5 *",
      price: 2199,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Skmei Luxury Quartz Watch",
      rating: "4.6/5 *",
      price: 3099,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk5XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Skmei Luxury Quartz Watch",
      rating: "4.6/5 *",
      price: 3099,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9Db2ZmZWVfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      brandName: "Dual Movt Quartz Wristwatch",
      rating:" 4.6/5 *",
      price: 2499,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NzY2XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      brandName: "CURREN Quartz Watch",
      rating: "4.5/5 *",
      price: 2199,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Ultra-thin Steel Belt Watch",
      rating: "4.5/5 *",
      price: 2199,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Skmei Luxury Quartz Watch",
      rating: "4.6/5 *",
      price: 3099,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk5XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Skmei Luxury Quartz Watch",
      rating: "4.6/5 *",
      price: 3099,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9Db2ZmZWVfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      brandName: "Dual Movt Quartz Wristwatch",
      rating: "4.6/5 *",
      price: 2499,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NzY2XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      brandName: "CURREN Quartz Watch",
      rating: "4.5/5 *",
      price: 2199,
      shipping: "Free Shipping",
    },
    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" , 
      brandName: "Ultra-thin Steel Belt Watch",
      rating:" 4.5/5 *",
      price: 2199,
      shipping: "Free Shipping",
    },

    {
      image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      brandName: "Skmei Luxury Quartz Watch",
      rating: "4.6/5 *",
      price: 3099,
      shipping: "Free Shipping",
    },
    {image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk5XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Skmei Luxury Quartz Watch",
        rating: "4.6/5 *",
        price: 3099,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9Db2ZmZWVfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        brandName: "Dual Movt Quartz Wristwatch",
        rating: "4.6/5 *",
        price: 2499,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NzY2XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        brandName: "CURREN Quartz Watch",
        rating: "4.5/5 *",
        price: 2199,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Ultra-thin Steel Belt Watch",
        rating: "4.5/5 *",
        price: 2199,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Skmei Luxury Quartz Watch",
        rating: "4.6/5 *",
        price: 3099,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk5XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Skmei Luxury Quartz Watch",
        rating: "4.6/5 *",
        price: 3099,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9Db2ZmZWVfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        brandName: "Dual Movt Quartz Wristwatch",
        rating:" 4.6/5 *",
        price: 2499,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NzY2XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        brandName: "CURREN Quartz Watch",
        rating: "4.5/5 *",
        price: 2199,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Ultra-thin Steel Belt Watch",
        rating: "4.5/5 *",
        price: 2199,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Skmei Luxury Quartz Watch",
        rating: "4.6/5 *",
        price: 3099,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk5XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Skmei Luxury Quartz Watch",
        rating: "4.6/5 *",
        price: 3099,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9Db2ZmZWVfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        brandName: "Dual Movt Quartz Wristwatch",
        rating: "4.6/5 *",
        price: 2499,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NzY2XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        brandName: "CURREN Quartz Watch",
        rating: "4.5/5 *",
        price: 2199,
        shipping: "Free Shipping",
    },
    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" , 
        brandName: "Ultra-thin Steel Belt Watch",
        rating:" 4.5/5 *",
        price: 2199,
        shipping: "Free Shipping",
    },

    {
        image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        brandName: "Skmei Luxury Quartz Watch",
        rating: "4.6/5 *",
        price: 3099,
        shipping: "Free Shipping",
    },
  ];

  let cartArr=JSON.parse(localStorage.getItem("cart-item"))||[]
  

  products.forEach(function(el){
    let card=document.createElement("div")

    let productImg=document.createElement("img")
    productImg.src=el.image_url;

    let brand=document.createElement("h3")
    brand.innerText=el.brandName;

    let rating=document.createElement("h4")
    rating.innerText=el.rating;

    let price=document.createElement("p")
    price.innerText=el.price;

    let ship=document.createElement("p")
    ship.innerText=el.shipping

    let btn=document.createElement("button")
    btn.innerText="Add to Cart";
    btn.addEventListener("click",function(){
        addToCart(el);    
    })

    card.append(productImg,brand,rating,price,ship,btn)
    document.querySelector("#newarrival").append(card)
  })

  function addToCart(el){
      cartArr.push(el)
      localStorage.setItem("cart-item",JSON.stringify(cartArr))
  }


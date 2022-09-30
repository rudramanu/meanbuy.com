let products=[
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODExXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       brandName: "Smart Display Water Bottle",
       rating: "4.5/5 *",
       price: 3499,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName: "Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
       rating: "4.5/5 *",
       price: 27999,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       brandName: "Dual-Use Laptop and Desktop Stand",
       rating: "4.9/5 *",
       price: 12999,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName: "Two-Seater PS4 Charging Base",
       rating: "4.2/5 *",
       price: 1099,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName: "PS4 Slim Pro Charging Base",
       rating: "5/5 *",
       price: 2999,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
       brandName: "HUAWEI MateBook X Pro i5 16GB 512G",
       rating: "4.2/5 *",
       price: 249999,
       shipping: "Free Shipping",
    },
    { image_url:
       " https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName: "Xiaomi Mi Dual Mode Wireless Mouse",
       rating: "3.9/5 *",
       price: 1299,
       shipping: "Free Shipping",
    },
    { image_url:
       " https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM3XC9Sb3NlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
       brandName:"Xiaomi Mi Portable Mouse",
       rating: "5/5 *",
       price: 1999,
       shipping: "Free Shipping",
    },
    { image_url:
       " https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName:"Xiaomi Mi Computer Glass",
       rating: "3.6/5 *",
       price: 1999,
       shipping: "Free Shipping",
    },

    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODExXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       brandName: "Smart Display Water Bottle",
       rating: "4.5/5 *",
       price: 3499,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName: "Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
       rating: "4.5/5 *",
       price: 27999,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       brandName: "Dual-Use Laptop and Desktop Stand",
       rating: "4.9/5 *",
       price: 12999,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName: "Two-Seater PS4 Charging Base",
       rating: "4.2/5 *",
       price: 1099,
       shipping: "Free Shipping",
    },
    { image_url:
        "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       brandName: "PS4 Slim Pro Charging Base",
       rating: "5/5 *",
       price: 2999,
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

  let cartArr=JSON.parse(localStorage.getItem("cart-item")) || []
  
  let cartStored=JSON.parse(localStorage.getItem("cart-item")) || [];
  console.log("hii",cartStored.length)
  document.querySelector("#countcart").innerHTML=cartStored.length;

  products.forEach(function(el){
    let card=document.createElement("div")

    let productImg=document.createElement("img")
    productImg.src=el.image_url;

    let brand=document.createElement("h3")
    brand.innerText=el.brandName;

    let Rating=document.createElement("h4")
    Rating.innerText=el.rating;

    let Price=document.createElement("p")
    Price.innerText=el.price;

    let Ship=document.createElement("p")
    Ship.innerText=el.shipping;

    let btn=document.createElement("button")
    btn.innerText="Add to Cart";
    btn.addEventListener("click",function(){
        addToCart(el)
    })

    card.append(productImg,brand,Rating,Price,Ship,btn)
    document.querySelector("#clicklogo").append(card)
  })

  function addToCart(el){
    cartArr.push(el)
    localStorage.setItem("cart-item", JSON.stringify(cartArr))
  }
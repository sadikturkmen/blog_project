const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const { parse } = require('dotenv');


/* GET */
/* HOME */
 
router.get('', async (req, res) => {
    try {
            const locals = {
        title: "Sadik Nodejs Blog",
        description: "Nodejs, Express ve MongoDb kullanilan projesel bir blog."
    }

    let perPage = 6;
    let page = req.query.page || 1;

    const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    const count = await Post.countDocuments({});
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

          res.render('index', { 
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });

    } catch (error) {
      console.log(error);
    }

});

// router.get('', async (req, res) => {
//     const locals = {
//         title: "Sadik Nodejs Blog",
//         description: "Nodejs, Express ve MongoDb kullanilan projesel bir blog."
//     }

//     try {
//       const data = await Post.find();
//           res.render('index', { locals, data });
//     } catch (error) {
//       console.log(error);
//     }

// });










// function insertPostsData() {
//     Post.insertMany([
//   {
//     title: "Evde Kendi Kahvenizi Demleyin: V60 Rehberi",
//     body: "Nitelikli kahve dünyasına giriş. Evde V60 kullanarak mükemmel bir fincan kahve demlemenin püf noktaları ve adım adım yöntemi."
//   },
//   {
//     title: "Minimalizm: Daha Az Eşya ile Daha Mutlu Yaşam",
//     body: "Eşyalarınız size mi sahip, yoksa siz mi onlara? Minimalist yaşam felsefesinin temelleri ve hayatınıza nasıl uygulayabileceğinize dair pratik adımlar."
//   },
//   {
//     title: "Yeni Başlayanlar İçin Python Programlama",
//     body: "Kodlama dünyasına adım atmak isteyenler için en popüler dillerden biri olan Python'a giriş. Neden Python öğrenmelisiniz ve ilk 'Hello World' programınız."
//   },
//   {
//     title: "Hafta Sonu Kaçamağı: Şile ve Ağva Rotası",
//     body: "İstanbul'un karmaşasından uzaklaşmak için ideal bir rota. İki gün içinde doğayla baş başa kalabileceğiniz aktiviteler ve konaklama önerileri."
//   },
//   {
//     title: "Finansal Okuryazarlık: Bütçe Nasıl Yapılır?",
//     body: "Paranızı yönetmek karmaşık olmak zorunda değil. Gelir ve giderlerinizi takip etmek için basit ama etkili bir bütçe planı oluşturma rehberi."
//   }
// ])
// }

// insertPostsData();


/* GET */
/* POST :id */

router.get('/post/:id', async (req, res) => {
    try {
        let slug = req.params.id;

      const data = await Post.findById({_id: slug});

        const locals = {
            title: data.title,
            description: "Nodejs, Express ve MongoDb kullanilan projesel bir blog."
        }

          res.render('post', { locals, data });
    } catch (error) {
      console.log(error);
    }

});


/* POST  */
/* POST - searchterm */

router.post('/search', async (req, res) => {
    try {
      const locals = {
          title: "Search",
          description: "Nodejs, Express ve MongoDb kullanilan projesel bir blog."
      }      

      let searchTerm = req.body.searchTerm; 
      const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

      const data = await Post.find({
        $or: [
          {title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
          {body: { $regex: new RegExp(searchNoSpecialChar, 'i') }}
        ]
      });

          res.render("search", {
            data,
            locals
          });

    } catch (error) {
      console.log(error);
    }

});







router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;

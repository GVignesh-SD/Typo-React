import React from 'react'
import './Gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Gallery() {
  return (
    <div className="galleryPage">
      <Carousel infiniteLoop autoPlay className='main-slide'  showThumbs={false}>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2015/06/12/13/16/mountain-806915_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2018/04/17/23/10/nature-3329096_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2018/02/16/11/19/nature-3157460_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2015/11/06/07/15/landscape-1025435_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2017/02/28/08/28/thailand-2105147_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2018/11/01/05/31/british-columbia-3787197_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2018/10/31/06/09/bridge-3785255_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2020/01/31/20/32/landscape-4808908_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2020/04/15/18/11/spring-5047709_640.jpg" alt="" />
        </div>
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2016/07/01/21/18/landscape-1491964_640.jpg" alt="" />
        </div>
      </Carousel>
      <div className="imageGallery" data-aos="fade-up" data-aos-duration="2000">
        <h1 data-aos="fade-up" data-aos-duration="1500">Image Gallery</h1>
        <div class="row">
          <div class="column">
            <img src="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=400" alt='image' />
            <img src="https://images.pexels.com/photos/639086/pexels-photo-639086.jpeg?auto=compress&cs=tinysrgb&w=400" alt='image' />
            <img src="https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?auto=compress&cs=tinysrgb&w=400" alt='image'/>
            <img src="https://images.pexels.com/photos/534049/pexels-photo-534049.jpeg?auto=compress&cs=tinysrgb&w=400" alt='image'/>
            <img src="https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=400" alt='image'/>
            <img src="https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=400" alt='image'/>
            <img src="https://images.pexels.com/photos/327509/pexels-photo-327509.jpeg?auto=compress&cs=tinysrgb&w=400" alt='image'/>
          </div>
          <div class="column">
            <img src="https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&w=400g" />
            <img src="https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/707696/pexels-photo-707696.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=400" />
          </div>
          <div class="column">
            <img src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1650861/pexels-photo-1650861.jpeg?auto=compress&cs=tinysrgb&w=400" />
          </div>
          <div class="column">
            <img src="https://images.pexels.com/photos/1152707/pexels-photo-1152707.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/695688/pexels-photo-695688.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
import React from 'react';
import { Card } from 'reactstrap';

function RenderGalleryItem({gallery}) {
    return (
        <div className="row no-gutters">
        <div className="col">
            <Card>
            <div className="gallery-item">
                <a href="assets/img/gallery/react-lake.jpg" className="venobox" data-gall="gallery-item">
                <img src={gallery.image} class="img-fluid" alt="gallery"/>
                </a>
            </div>

            </Card>
           

        </div>
         
    </div>
       
        
    );
}

   /*
   <div className="row no-gutters">
            <div className="col-lg-3 col-md-9">
                <div className="gallery-item">
                    <a href="assets/img/gallery/react-lake.jpg" className="venobox" data-gall="gallery-item">
                    <img src="/assets/images/react-lake.jpg" class="img-fluid"/>
                    </a>
                </div>

            </div>
             
        </div>
       
   
   
   
   
   
   
   <Card>

    <div className="col-lg-3 col-md-4">
                <div class="gallery-item">
                    <a href="assets/img/gallery/gallery-1.jpg" className="venobox" data-gall="gallery-item"/>
                        <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid">
                  
                   
              

                </div>
         
            </div>



            <Link to={`/gallery/${campsite.id}`} >
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>

                </CardImgOverlay>
            </Link>
        </Card>*/
function Gallery(props) {

    const gallery = props.gallery.map(gallery => {
        return (
            <div key={gallery.id} className="col-md-5 m-1">
                <RenderGalleryItem gallery={gallery}/>
            </div>
        );
    });

    return (
        <section id="gallery" class="gallery">
            <div className="container" id="gallery">
                <div className="row">
                    <div className="col-12">
                    <div class="section-title">
                        <h2>Some photos from <span>Our Events</span></h2>
                    </div>
                    </div>
                </div>
                <div className="row">
                    {gallery}
                </div>
            </div>
        </section>    
    );
}

export default Gallery;
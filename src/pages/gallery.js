import React from 'react'
import {GalleryComp} from '../Components/GalleryComp';
function gallery() {
    return (
      <>
        <main>
          <h3>Our Equipments</h3>
          <section className="gallery--section">
            <GalleryComp/>
          </section>
        </main>
      </>
    )
}

export default gallery

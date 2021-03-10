import React from 'react'
import {Img} from '../Components/Img';
import {AboutContent} from '../Components/AboutContent';
function about() {
    return (
      <>
        <main>
          <section className="about--section">
            <Img />
            <AboutContent />
          </section>
        </main>
      </>
    )
}

export default about

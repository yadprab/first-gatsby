import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
function PriceComp() {
  const [Pricing, setPricing] = useState({
    state:false
  })
  const data = useStaticQuery(graphql`
    query {
      allContentfulPricing {
        nodes {
          id
          priceYearly
          priceMonthly
          planYear
          planMonth
          list
        }
      }
    }
  `)
  const {
    allContentfulPricing: { nodes },
  } = data
  return (
    <>
      <section className='toggle'>
        <h3>Membership price</h3>
        <article className="price--toggle">
          <p>Monthly</p>
          <label className={Pricing.state ? "move" : ""}>
            <button
              id="toggle--button"
              onClick={() => {
                setPricing({
                  state: !Pricing.state,
                })
              }}
            ></button>
          </label>
          <p>Yearly</p>
        </article>
      </section>

      <section className="cards--section">
        {nodes.map(n => {
          return (
            <article className="card" key={n.id}>
              <div className="border" tabIndex="-1"></div>
              <p>{n.planYear}</p>
              <h3>${!Pricing.state ? n.priceMonthly : n.priceYearly}</h3>

              <button id="buy--now">buy now</button>

              <ul>
                {n.list.map(l => {
                  return <li key={l}>{l}</li>
                })}
              </ul>
            </article>
          )
        })}
      </section>
    </>
  )
}

export { PriceComp }

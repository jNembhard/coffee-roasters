import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/organisms/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Great coffee made simple.</h1>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button>Create your plan</button>
    </div>

    <div className="our-collection">
      Our collection
      <div>
        <h4>Gran Espresso</h4>
        <p>
          Light and flavorful blend with cocoa and black pepper for an intense
          experience
        </p>
      </div>
      <div>
        <h4>Planalto</h4>
        <p>
          Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts
        </p>
      </div>
      <div>
        <h4>Piccollo</h4>
        <p>
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry
        </p>
      </div>
      <div>
        <h4>Danche </h4>
        <p>
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </p>
      </div>
    </div>
    <div className="why-choose-us">
      <div>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div>
        <div>
          <h4>Best quality</h4>
          <p>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </div>
        <div>
          <h4>Exclusive benefits</h4>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>
        <div>
          <h4>Free shipping</h4>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </div>
    </div>
    <div className="how-it-works">
      How it works
      <div>
        <h1>01</h1>
        <h3>Pick your coffee</h3>
        <p>
          Select from our evolving range of artisan coffees. Our beans are
          ethically sourced and we pay fair prices for them. There are new
          coffees in all profiles every month for you to try out.
        </p>
      </div>
      <div>
        <h1>02</h1>
        <h3>Choose the frequency</h3>
        <p>
          Customize your order frequency, quantity, even your roast style and
          grind type. Pause, skip or cancel your subscription with no commitment
          through our online portal.
        </p>
      </div>
      <div>
        <h1>03</h1>
        <h3>Receive and enjoy!</h3>
        <p>
          We ship your package within 48 hours, freshly roasted. Sit back and
          enjoy award-winning world-class coffees curated to provide a distinct
          tasting experience.
        </p>
      </div>
      <button>Create your plan</button>
    </div>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage

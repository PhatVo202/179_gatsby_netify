import * as React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <section className="hero my-5">
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <div style={{ maxWidth: "450px" }} className="hero__content">
              <h1 className="section-title" style={{ color: "#005243" }}>
                Welcome to my blog!
              </h1>
              <p>
                I use this space to document my adventures in front-end
                development, sharing how I’ve overcome issues I’ve run into,
                useful resources, and more.
              </p>
              <p>
                Below are some of my favourite articles, or you can go to the
                blog page to see my most recent posts.
              </p>
              <div className="flex-group">
                <button
                  style={{ backgroundColor: "#18846c", marginRight: "30px" }}
                  className="btn text-white py-2 px-4"
                >
                  Featured articles
                </button>
                <button className="btn btn-light">Most recent articles</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              {/* <img src="//unsplash.it/510" alt className="hero__image" /> */}
              <img
                src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg"
                alt=""
                className="mg-fluid img-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      style={{ backgroundColor: "#e9fbf8" }}
      id="featured-articles"
      className="featured-articles p-5"
    >
      <div className="container flow">
        <div className="my-5">
          <h2
            style={{ color: "#005243" }}
            className="section-title text-center "
          >
            Featured articles
          </h2>
          <p className="text-center">
            Here is a sample of articles which I feel give you a good idea of
            what this site is all about.
          </p>
        </div>

        {data.blogInformation?.edges?.map(({ node }) => (
          <div key={node.id} className="row my-5">
            <div className="col-6">
              <h3 className="snippet__title">
                <Link
                  href="/blog/my-first-article/"
                  className="text-black text-decoration-none"
                >
                  {node.frontmatter.title}
                </Link>
              </h3>
              <p className="snippet__meta">
                by <span>{node.frontmatter.author}</span> on{" "}
                <span>{node.frontmatter.date}</span>
              </p>
              <p className="snippet__body">{node.frontmatter.description}</p>
              {/* <a href="/blog/my-first-article/" className="btn btn--primary">
                  Continue Reading
                </a> */}
              <button
                style={{ backgroundColor: "#18846c", marginRight: "30px" }}
                className="btn text-white py-2 px-4"
              >
                Continue Reading
              </button>
            </div>
            <div className="col-6">
              <GatsbyImage
                image={getImage(node.frontmatter.image)}
                alt={node.frontmatter.imageAlt || "Image"}
              />
            </div>
          </div>
          // <div key={node.id}>
          //   <h2>{node.frontmatter.author}</h2>
          // </div>
        ))}
      </div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    blogInformation: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date(difference: "")
            description
            imageAlt
            tags
            title
            image {
              base
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
`

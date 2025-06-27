import * as React from "react"
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <section
      style={{ backgroundColor: "white" }}
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

export const Head = () => <Seo title="Blog" />

export default BlogPage

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

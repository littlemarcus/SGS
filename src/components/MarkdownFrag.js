import { graphql } from "gatsby";

export const MarkdownFrontmatter = graphql`
    fragment MarkdownFrontMatter on MdxFrontmatter {
    title
  date(formatString: "MMMM DD, YYYY")
  hero_image_alt
  hero_image_credit_link
  hero_image_credit_text
  hero_image {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`
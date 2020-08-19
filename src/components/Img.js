/* eslint react/jsx-props-no-spreading: 0 */

/* eslint react/prop-types: 0 */
import React from 'react';
import Img from 'gatsby-image';

export default function WhyDoINeedToMakeThisComponent({ image, ...theRest }) {
  if (!image) {
    return null;
  }
  if (image.extension === 'gif') {
    return <img src={image.publicURL} {...theRest} />;
  }
  return <Img fluid={image.node.childImageSharp.fluid} {...theRest} />;
}

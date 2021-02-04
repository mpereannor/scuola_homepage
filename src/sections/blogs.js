import React from 'react';
import { Container, Box } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import blogImage1 from 'assets/blog-1-1.png';
import blogImage2 from 'assets/blog-1-2.png';
import blogImage3 from 'assets/blog-1-3.png';
import blogImage4 from 'assets/blog-1-4.png';

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'How to succeed this semester',
    description:
      'The 2020 best student award went to Claire. In this post she shares her secret on how to fully maximise your potential',
    path: 'https://scuola.netlify.app/registe',
    linkLabel: 'Learn More',
  },
  {
    image: null,
    title:
      'Dealing with anxiety and stress during a pandemic',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage3,
    title: 'Staying up to date with your fellow teachers',
    description: null,
    path: 'https://scuola.netlify.app/register',
    linkLabel: null,
  },
  {
    image: blogImage2,
    title: 'Multiple art sketch board prototype with Blender',
    description:
      'Making the best use of Blender 3D in creating quick and easy to use prototypes',
    path: 'https://scuola.netlify.app/register',
    linkLabel: 'Learn More',
  },
  {
    image: blogImage4,
    title:
      'Team presentation with latest user interface',
    description: null,
    path: 'https://scuola.netlify.app/registe',
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular blog post we updated"
          text="Updete newsfeed blog"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};

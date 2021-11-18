import { PostCard, Categories, PostWidget } from '../components';
import { useEffect, useState } from 'react';
import HeroSVG from '../components/HeroSVG';
import { getPosts } from '../services'
import Typical from 'react-typical'

export default function Home({ posts }) {
  return (
    <>
      <main id="main-content">
        <div className="hero center-xy wrapper">
          <div className="hero__text">
            <h1 className="hero__hey">Howdy, I'm Samuel!</h1>
            <h2 className="hero__about--title">
              I'm a{' '}
              <Typical
                steps={[
                  'full stack developer',
                  650,
                  'front end developer',
                  650,
                  'software developer',
                  650,
                  'producer hobbyist',
                  650,
                  'hardcore gamer',
                  650,
                  'synthwave enthusiast',
                  650,
                ]}
                wrapper="span"
                loop={Infinity}
              />
              — with a passion for learning
            </h2>
            <p className="hero__about">
              Welcome to my website! Have a look around and see what piques your interest. See my latest projects, or check out a blog post!
            </p>
            <div className="hero__buttons">
              <a href="#" className="btn">Projects</a>
              <a href="#" className="btn btn--secondary">Blog</a>
            </div>
          </div>
          <div className="hero__avatar">
            <HeroSVG />
          </div>
        </div>
        <div className="home wrapper">
          <div className="recently-published">
            <h2 className="section-heading">Recently Published</h2>
            <div className="recently-published__posts">
              {posts.map((post) => (
                <PostCard post={post.node} key={post.title} />
              ))}
            </div>
          </div>
          <div className="explore-tags">

          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

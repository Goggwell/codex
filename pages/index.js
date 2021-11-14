import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { useEffect, useState } from 'react';
import HeroSVG from '../components/HeroSVG';
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Sam's Codex</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Sam's Codex"/>
        <meta property="og:title" content="Sam's Codex"/>
        <meta property="og:type" content="website"/>
        <meta name="description" content="Howdy, I'm Samuel! Full stack developer, specializing in frontend technologies." />
      </Head>
      <main id="main-content">
        <div className="hero center-xy wrapper">
          <div className="hero__text">
            <h1 className="hero__hey">Howdy, I'm Samuel!</h1>
            <h2 className="hero__about--title">
              I'm a <span>full stack developer</span>, with a focus on frontend technologies
            </h2>
            <p className="hero__about">
              Welcome to my website! Have a look around and see what piques your interest. See my latest projects, or check out a blog post!
            </p>
            <div className="hero__buttons">
              <a href="#" className="btn">Writing</a>
              <a href="#" className="btn btn--secondary">Shop artwork</a>
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

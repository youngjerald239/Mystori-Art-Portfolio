import React from "react"
import "../style.css"
import Layout from "../layout/Layout"
import {TwitterTweetEmbed} from "react-twitter-embed"


export default function Blog() {


  return (
    <Layout>
      <h1>Mystori Art's Portfolio</h1>

      <h2>About Me</h2>
      <p>
        Hello, My name is Tori. 
        I created Mystori Art to showcase my interests in character design, fanart, landscapes, and many other digital art projects. I have developed my own style to match my tastes as a black artist, please checkout my ko-fi. Be sure to checkout my most recent works bellow, with timelapses included!
      </p>
      <div className="widgets">
           
           <div className="widgets__widgetContainer">
              
               <TwitterTweetEmbed className="tweet" tweetId={"1423475985412935680"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1419792355964694533"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1420059600267747330"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1426274218644328452"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1418345590405140482"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1417597372205568005"}/>
               
               
           </div>
        </div>
    </Layout>
  )
}

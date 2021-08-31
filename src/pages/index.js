import React from "react"
import "../style.css"
import Layout from "../layout/Layout"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"


export default function Blog() {


  return (
    <Layout>
      <h1>Mystori Art's Portfolio</h1>

      <h1>About Me</h1>
      <p>
        Hey, My name is Tori. 
        I created Mystori Art to showcase my interests in character design, fanart, landscapes, and many other digital art projects. I have developed my own style to match my tastes as a black artist, please checkout my ko-fi or donate to $bluelily53 via cash app. Below, you can take a look at some of my latest works, with timelapses included!
      </p>
      <div className="widgets">
           
           <div className="widgets__widgetContainer">
              
               <TwitterTweetEmbed className="tweet" tweetId={"1423475985412935680"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1428130865738027010"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1427362640108609554"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1426274218644328452"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1418345590405140482"}/>
               <TwitterTweetEmbed className="tweet" tweetId={"1417597372205568005"}/>
               
               
           </div>
        </div>
    </Layout>
  )
}

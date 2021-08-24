import React from "react"
import "../style.css"
import Layout from "../layout/Layout"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {TwitterShareButton, TwitterTweetEmbed, TwitterVideoEmbed} from "react-twitter-embed"


export default function Blog() {


  return (
    <Layout>
      <h1>Mystori Art's Portfolio</h1>

      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
        lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at
        nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero,
        at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus
        bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras
        pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum
        metus, non dictum mauris. Nulla at tellus sagittis, viverra est a,
        bibendum metus.
      </p>
      <div className="widgets">
           
           <div className="widgets__widgetContainer">
               <h2>What's happening?</h2>
               <TwitterTweetEmbed tweetId={"1422911359042428936"}/>
               <TwitterTweetEmbed tweetId={"1428130865738027010"}/>
               <TwitterTweetEmbed tweetId={"1427362640108609554"}/>
               <TwitterVideoEmbed tweetId={"1426274218644328452"}/>
               <TwitterShareButton url={"https://twitter.com/ToriTooMuch?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1407409199378751491%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2FToriTooMuch2Fstatus2F1407409199378751491widget%3DTweet"} options={{text:"#reactjs is awesome", via:"Jerald Young"}}/>
           </div>
        </div>
    </Layout>
  )
}

import React from "react"

export default function BlogContext() {
  return (
    <div>
      <p>
        What is z-index? Z-index is a CSS property that allows you to position
        HTML elements in layers on top of one another. It seems simple at first,
        but it’s deceptively simple.
      </p>
      <p>
        There are some weird, non-intuitive rules that can make it not behave
        the way you want– even if you set z-index to 999999!
      </p>
      <p>
        This article will explain in detail four of the most common reasons that
        z-index isn’t working for you. You’ll learn how to use CSS to bring
        elements to the front, or back behind other elements.
      </p>
      <br />
      <h2>
        1. Elements in the same stacking context will display in order of
        appearance, with latter elements on top of former elements.
      </h2>
      <p>
        In our first example, we have a relatively simple layout that includes 3
        main elements:
      </p>
      <ul>
        <li>An image of a cat</li>
        <li>A white block with text</li>
        <li>Another image of the same cat</li>
      </ul>
      <p>Here’s the HTML markup for that:</p>
      <pre>
        <code>
        {`
        <div class="cat-top"></div>
        
        <div class="content__block">
          Meow meow meow...
        </div>
            
        <div class="cat-bottom"></div>
        `}
        </code>
      </pre>
      <p>
        In this layout, we ideally want the white block of text to be on top of
        both cats.
      </p>
      <p>
        To try to achieve this, we’ve added some negative margins to the CSS for
        both cat images, so that they overlap the white block a bit:
      </p>
      <pre>
        <code>
        {`
        .cat-top { 
          margin-bottom: -110px;
        }  
        
        .cat-bottom {    
          float: right;
          margin-top: -120px;
        }
        `}
        </code>
      </pre>
      <p>However, it looks like this:</p>
    </div>
  )
}

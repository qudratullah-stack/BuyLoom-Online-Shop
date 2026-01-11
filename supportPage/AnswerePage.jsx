import React from 'react'
import './support.css'
import Fuse from 'fuse.js'
import { useContext } from 'react'
import { productContext } from '../src/context/CreateContex'
import { helpCenterData } from './HelpCenterDate'
function AnswerePage() {
  const {giveAnswer, setGiveAnswer} = useContext(productContext)
const fuse = new Fuse(helpCenterData,{
  keys:['question']
})
const result = fuse.search(giveAnswer)
const answer = result.length ? result[0].item.answer: "Answer not found. AI fallback will provide response:"
  return (
    <>
     <nav className="homepagenavbar">
        <img src="/navbaricon.png" alt="navbaricon" />
      </nav>
      <div className="helpQuestionparent">{giveAnswer}</div>
      <div className="answere">{
       answer
        }</div>

    </>
  )
}

export default AnswerePage

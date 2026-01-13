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
const answer = result.length ? result[0].item.answer: "Hello dear users,Welcome to our website!Here youcan get information about our website, such as learning about any page or obtaining other information.We are at your service.Where would you like to start?"
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

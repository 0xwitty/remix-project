/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../themeContext'
declare global {
  interface Window {
    _paq: any
  }
}
const _paq = window._paq = window._paq || [] //eslint-disable-line

enum VisibleTutorial {
  Basics,
  Intermediate,
  Advanced
}
interface  HomeTabLearnProps {
  plugin: any
}

function HomeTabLearn ({plugin}: HomeTabLearnProps) {
  const [state, setState] = useState<{
    visibleTutorial: VisibleTutorial
  }>({
    visibleTutorial: VisibleTutorial.Basics
  })

  const themeFilter = useContext(ThemeContext)

  const openLink = () => {
    window.open("https://remix-ide.readthedocs.io/en/latest/remix_tutorials_learneth.html?highlight=learneth#learneth-tutorial-repos", '_blank')
  }

  const startLearnEthTutorial = async (tutorial) => {
    await plugin.appManager.activatePlugin(['solidity', 'LearnEth', 'solidityUnitTesting'])
    plugin.call('LearnEth', 'startTutorial', 'ethereum/remix-workshops', 'master', tutorial)
    plugin.verticalIcons.select('LearnEth')
    _paq.push(['trackEvent', 'homeTab', 'startLearnEthTutorial', tutorial])
  }

  return (
    <div className="d-flex px-2 pb-2 pt-2 d-flex flex-column" id="hTLearnSection">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3 py-2 align-item-center justify-content-center">
          <span><label className="align-self-center h5 m-0" style={{fontSize: "1.2rem"}}>Learn</label></span>
          <span><label className="align-self-center h5 m-0 text-success ml-1" style={{fontSize: "1.2rem"}}>ETH</label></span>
        </div>
        <button
          onClick={ ()=> openLink()}
          className="h-100 px-2 pt-0 btn"
        >
          <img className="align-self-center" src="assets/img/learnEthLogo.webp" alt="" style={ { filter: themeFilter.filter, width: "1rem", height: "1ren" } } />
        </button>
      </div>
      <div className="d-flex" style={{ gap: 15 }}>
        <button className="d-flex btn border" onClick={() => setState((prevState) => {return { ...prevState, visibleTutorial: VisibleTutorial.Basics }})}>
          <label className="text-nowrap pt-1" style={{fontSize: "1rem"}}>Remix Basics</label>
          {/* {(state.visibleTutorial === VisibleTutorial.Basics) && <div className="pt-2 d-flex flex-column text-left">
            <span>Introduction to Remix's interface and concepts used in Ethereum, as well as the basics of Solidity.</span>
            <button className="btn btn-sm btn-secondary mt-2" style={{width: 'fit-content'}} onClick={() => startLearnEthTutorial('basics')}>Get Started</button>
          </div>} */}
        </button>
        <button className="d-flex btn border" onClick={() => setState((prevState) => {return { ...prevState, visibleTutorial: VisibleTutorial.Intermediate }})}>
          <label className="text-nowrap pt-1" style={{fontSize: "1rem"}}>Solidity Basics</label>
          {/* {(state.visibleTutorial === VisibleTutorial.Intermediate) && <div className="pt-2 d-flex flex-column text-left">Using the web3.js to interact with a contract. Using Recorder tool.
          <button className="btn btn-sm btn-secondary mt-2" style={{width: 'fit-content'}} onClick={() => startLearnEthTutorial('useofweb3js')}>Get Started</button>
          </div>} */}
        </button>
      </div>
      <div className="d-flex mt-4 pt-1">
        <button className="d-flex flex-column btn btn-link text-decoration-none" onClick={() => setState((prevState) => {return { ...prevState, visibleTutorial: VisibleTutorial.Advanced }})}>
          <div className="d-flex justify-content-between align-items-center">
            <span><label className="m-0 float-left" style={{fontSize: "1rem"}}>See All Tutorials</label></span>
            <span className="fas fa-chevron-down ml-2" style={{ textDecoration: 'none'}}></span>
          </div>
          {/* { (state.visibleTutorial === VisibleTutorial.Advanced) && <div className="pt-2 d-flex flex-column text-left">Learn the Proxy Pattern and working with Libraries in Remix. Learn to use the Debugger.
          <button className="btn btn-sm btn-secondary mt-2" style={{width: 'fit-content'}} onClick={() => startLearnEthTutorial('deploylibraries')}>Get Started</button>
          </div>} */}
        </button>
      </div>
    </div>
  )
}

export default HomeTabLearn
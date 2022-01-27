import React from "react"
import Loadable from "react-loadable"

const loader = () => <div style={{ backgroundColor: `black` }}></div>
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"),
  loading: loader,
})

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  )
}
export default Index

import React from "react"
import Loadable from "react-loadable"

const loader = () => <div>Loading.</div>
//
const HomeLazy = Loadable({
  loader: () => import("../containers/home"),
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

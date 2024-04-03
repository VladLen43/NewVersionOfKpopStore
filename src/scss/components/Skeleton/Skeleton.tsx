import React from "react"
import ContentLoader from "react-content-loader"



const Skeleton: React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#cecaca"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="287" y="48" rx="0" ry="0" width="1" height="0" /> 
    <rect x="26" y="0" rx="10" ry="10" width="217" height="268" /> 
    <rect x="27" y="289" rx="10" ry="10" width="215" height="47" /> 
    <rect x="178" y="292" rx="0" ry="0" width="26" height="5" /> 
    <rect x="28" y="383" rx="10" ry="10" width="99" height="40" /> 
    <rect x="158" y="382" rx="10" ry="10" width="80" height="40" />
  </ContentLoader>
)

export default Skeleton
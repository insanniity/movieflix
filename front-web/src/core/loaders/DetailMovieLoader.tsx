import ContentLoader from "react-content-loader"

const DetailMovieLoader = () => (
  <ContentLoader 
    speed={2}
    width={1140}
    height={300}
    viewBox="0 0 1140 300"
    backgroundColor="#6C6C6C"
    foregroundColor="#9A9A9A"  
    className="col-xs-12" 
  >
    <rect x="10" y="10" rx="2" ry="2" width="500" height="300" /> 
    <rect x="550" y="10" rx="2" ry="2" width="500" height="60" /> 
    <rect x="550" y="100" rx="2" ry="2" width="500" height="35" />     
    <rect x="550" y="150" rx="2" ry="2" width="500" height="150" />
  </ContentLoader>
)

export default DetailMovieLoader;
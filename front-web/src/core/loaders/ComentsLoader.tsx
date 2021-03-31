import ContentLoader from "react-content-loader"

const ComentsLoader = () => (
    <>
      <ContentLoader 
        speed={2}
        width={1140}
        height={150}
        viewBox="0 0 1140 150"
        backgroundColor="#6C6C6C"
        foregroundColor="#9A9A9A"
        className="col-xl-12"
      >
        <circle cx="34" cy="28" r="10" /> 
        <rect x="47" y="18" rx="5" ry="5" width="50%" height="20"/> 
        <rect x="25" y="48" rx="5" ry="5" width="90%" height="40" />
      </ContentLoader>
      <ContentLoader 
      speed={2}
      width={1140}
      height={150}
      viewBox="0 0 1140 150"
      backgroundColor="#6C6C6C"
      foregroundColor="#9A9A9A"
      className="col-xl-12"
    >
      <circle cx="34" cy="28" r="10" /> 
      <rect x="47" y="18" rx="5" ry="5" width="50%" height="20"/> 
      <rect x="25" y="48" rx="5" ry="5" width="90%" height="40" />
    </ContentLoader>
  </>
)

export default ComentsLoader;